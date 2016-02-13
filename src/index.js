import 'babel-core/polyfill'  //i guess this needs to be first?

import './index.html'

import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import './index.less'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Components from './Components/components'

import store from './Store/store'
window.store = store;

render(
	<Provider store={store}>
		<Components />
	</Provider>,
	document.getElementById('main')
)