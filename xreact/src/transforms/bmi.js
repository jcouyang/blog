import {lift2, xinput} from 'xreact'
function bmiCalc({weight}, {height}) {
  let health = 'N/A'
  let bmi = weight * 10000 / (height * height) 
  if (bmi < 18.5) health = 'underweight'
  else if (bmi < 24.9) health = 'normal'
  else if (bmi < 30) health = 'Overweight'
  else if (bmi >= 30) health = 'Obese'
  return { bmi: bmi.toFixed(2), health }
}
function strToInt(field) {
  return function(s) {
    s[field] = ~~s[field]
    return s
  }
}
export const XWeight = xinput('weight').map(strToInt('weight'))
export const XHeight = xinput('height').map(strToInt('height'))
export const XBMI = lift2(bmiCalc)(XWeight, XHeight)
