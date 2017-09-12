import {lift, xinput} from 'xreact'
export function inc(state) {
  return {count: state.count + 1}
}
export function dec(state) {
  return {count: state.count -1 }
}

export const XInc = lift(inc)(xinput('inc'))
export const XDec = lift(dec)(xinput('dec'))

export const XCount = xinput('count').map(state => ({count: ~~state.count}))
