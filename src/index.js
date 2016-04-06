// import 'babel-core/polyfill'  //i guess this needs to be first?

import './index.html'

import './favicon.ico'

import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import './index.less'

import './utils'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Components from './components/components'

import Store from './store/store'
import * as Actions from './actions'

window.STORE = Store
window.ACTIONS = Actions

render(
	<Provider store={Store}>
		<Components />
	</Provider>,
	document.getElementById('main')
)