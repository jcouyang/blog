import * as React from 'react'
import { render } from 'react-dom';
import {Counter} from './components/counter'
import {X} from 'xreact'
import * as RX from 'xreact/lib/xs/rx'
const xmount = (component, dom) => render(React.createFactory(X)({ x: RX }, component), dom)
xmount(<Counter />, document.getElementById('counter-app'))

import {XBMI} from './transforms/bmi.js'
import {View as BV} from './views/bmi.js'
const BMI = XBMI.apply(BV)
xmount(<BMI />, document.getElementById('bmi-app'))

import {XBMI, XWeight, XHeight} from './transforms/bmi.js'
const BMI2 = XBMI.concat(XWeight).concat(XHeight).apply(BV)
xmount(<BMI2 />, document.getElementById('bmi-app-2'))

import {XBMI as XASYNCBMI} from './transforms/async-bmi.js'
const BMI3 = XASYNCBMI.concat(XWeight).concat(XHeight).apply(BV)
xmount(<BMI3 />, document.getElementById('bmi-app-3'))
