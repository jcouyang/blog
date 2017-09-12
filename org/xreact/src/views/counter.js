import * as React from 'react'
export const View = props => (
 <div>
    <input type="button" name="dec" onClick={(e)=>props.actions.fromEvent(e)} value="-" />
    <input type="number" name="count" value={props.count} onChange={props.actions.fromEvent} />
    <input type="button" name="inc" onClick={(e)=>props.actions.fromEvent(e)} value="+" />
 </div>
)
View.defaultProps = {count: 0}
