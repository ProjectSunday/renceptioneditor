import 'babel-core/polyfill'  //i guess this needs to be first?

import './index.html'
// import './images'

import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import './styles/style.scss'

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

//hmn can't s