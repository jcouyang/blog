import {xinput,pure} from 'xreact'
import {XInc, XDec, XCount} from '../transforms/counter'
import {View} from '../views/counter'

const XCounter = XInc.concat(XDec).concat(XCount)
export const Counter = XCounter.apply(View)
