import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

//third-party
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

//other imports
import './images'
import './utils'
import './debug'

import Store from './store/store'
window.STORE = Store

import Main from './components/main'
render(
	<Provider store={Store}>
		<Main />
	</Provider>,
	document.getElementById('main')
)