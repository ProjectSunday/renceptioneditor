import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

//third-party
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

//other imports
import './favicon.ico'
import './index.less'   //main styling file, needs to be converted to sass
import './utils'
import './debug'

import Main from './components/main'

import Store from './store/store'
import * as Actions from './actions'

window.STORE = Store
window.ACTIONS = Actions

render(
	<Provider store={Store}>
		<Main />
	</Provider>,
	document.getElementById('main')
)