import * as React from 'react'
export const View = props => (
<div>
  <label>Height: {props.height} cm
    <input type="range" name="height" onChange={props.actions.fromEvent} min="150" max="200" defaultValue={props.height} />
  </label>
  <label>Weight: {props.weight} kg
    <input type="range" name="weight" onChange={props.actions.fromEvent} min="40" max="100" defaultValue={props.weight} />
  </label>
  <p>HEALTH: <span>{props.health}</span></p>
  <p>BMI: <span>{props.bmi}</span></p>
</div>
)
View.defaultProps = {health: '', bmi: 0, height: 175, weight: 70}
