import React from 'react'
import { connect } from 'react-redux'

import { addTest } from '../actions'

import Child from '../components/Child'

let Root = ({ dispatch }) => {

	// console.log('store', context.getState());

	let blah = () => {
		dispatch(addTest('testarg'));

		// console.log('store', this.context.getState());
	}

	return (
		<div>
			<div>this is root</div>

			<Child 
				blah = {"blahvalue"}
				onClick = {blah}
				/>
		</div>
	)
}

export default connect()(Root)
