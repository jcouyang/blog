import * as React from 'react'
import { render } from 'react-dom';
import {Counter} from './components/counter'
import {X} from 'xreact'
import * as RX from 'xreact/lib/xs/rx'
const xmount = (component, dom) => render(React.createFactory(X)({ x: RX }, component), dom)

xmount(Counter, document.getElementById('counter-app'))
