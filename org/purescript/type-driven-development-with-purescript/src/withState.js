import React from "react";
import { send, subscribe, channel } from "./output/Signal.Channel";
import { unsafePerformEffect } from "./output/Effect.Unsafe";
import { pure } from "./output/Control.Applicative";
import { applicativeEffect } from "./output/Effect";
import { runAff_ } from "./output/Effect.Aff";
import Signal, { functorSignal } from "./output/Signal";

function performEff(eff, setState) {
  if (eff && eff.tag) {
    return unsafePerformEffect(
      runAff_(a => {
        if (a.value0) {
          return () => setState(a.value0);
        } else
          return () => {
            throw new Error("meh..Something wrong with reducer", a);
          };
      })(eff)
    );
  } else if (typeof eff === "function") {
    let newState = unsafePerformEffect(eff);
    return setState(newState);
  }
}

export default function withState(WrappedComponent, initState, initAction) {
  const doNothing = () => {
    return pure(applicativeEffect)(initState)
  };
  const context = React.createContext({
    state: initState,
    dispatch: (action) => pure(applicativeEffect)({})
  });

  class Component extends React.Component {
    constructor(props) {
      super(props);
      this.state = initState;
      this.channel = unsafePerformEffect(channel(doNothing));
    }

    componentDidMount() {
      unsafePerformEffect(this.subscribeChannel());
      unsafePerformEffect(send(this.channel)(initAction(this.props)))
    }
    subscribeChannel() {
        this.signal = Signal.squigglyMap(functorSignal)(fn =>{
            return pure(applicativeEffect)(
            performEff(fn(this.state), this.setState.bind(this))
          )
        }
        
        )(subscribe(this.channel))
      return Signal.runSignal(this.signal);
    }

    render() {
      return (
        <context.Provider
          value={{
            state: this.state,
            dispatch: action => {
              unsafePerformEffect(send(this.channel)(action));
            }
          }}
        >
          <WrappedComponent {...this.props} />
        </context.Provider>
      );
    }
  }

  return { context, Component };
}
