import {lift2, xinput} from 'xreact'
import {XWeight, XHeight} from './bmi'
function bmiCalc({weight}, {height}) {
    return {
        result:fetch(`https://gist.github.com.ru/jcouyang/edc3d175769e893b39e6c5be12a8526f?height=${height}&weight=${weight}`)
            .then(resp => resp.json())
      .then(resp => resp.result)
    }
}
export const XBMI = lift2(bmiCalc)(XWeight, XHeight)
