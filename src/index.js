import './styles/style.scss'


import 'babel-core/polyfill'

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// import store from './store'

import reducers from './reducers'

let store = createStore(reducers);

window.store = store;

import Root from './containers/Root'

render(
	<Provider store={store}>
		<Root />
	</Provider>,
	document.getElementById('main')
)