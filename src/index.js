import './styles/style.scss'

import 'babel-core/polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Components from './components'

import store from './store'
window.store = store;
//console.log(store.getState());

render(
	<Provider store={store}>
		<Components />
	</Provider>,
	document.getElementById('main')
)