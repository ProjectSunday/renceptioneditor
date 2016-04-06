import React from 'react'
import { connect } from 'react-redux'

import ChildOne from './childone'
import ChildTwo from './childtwo'

const mapStateToProps = (state, ownProps) => {
	return {
		testing: state.testing
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		buttonOneClicked () {
			console.log('buttonOneClicked')
			// dispatch({ type: 'TESTVALUES_SET_VALUE', id: 1, value: 'changed' })

			// dispatch({ type: 'TESTING_MOVE_AND_SET', id: 0, fromIndex: 0, toIndex: 1})

			STORE.dispatch({ type: 'UI_SET', key: 'blahkey', value: 'blahvalue' })

			// STORE.dispatch(function (dispatch, getState) {



			// 	var ui = getState().ui

			// 	dp({

			// 	})

			// })
		},
		buttonTwoClicked () {
			dispatch({ type: 'TESTING_SET', values: [ 1, 0, 2, 3 ] })
		}
	}
}


@connect(mapStateToProps, mapDispatchToProps)
class Testing extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
		this.test = this.test.bind(this)
		this.state = {
			test: ''
		}
	}
	shouldComponentUpdate(nextProps) {
		console.log('Testing.shouldComponentUpdate', nextProps)
		return true
	}
	test() {
		this.setState({
			test: 'blah'
		})
	}
	render() {
		console.log('Testing.render ', this.props)
		const { testing, buttonOneClicked, buttonTwoClicked } = this.props
		var children = []

		testing.childOne.forEach((t, i) => {
			children.push(<ChildOne key={i} id={t} />)
		})

		var style = {
			testing: {
				clear: 'both',
				paddingTop: '20px'
			}
		}

		return (
			<div style={style.testing}>
				<span>Testing</span>
				<button onClick={buttonOneClicked}>ButtonOne</button>
				<button onClick={buttonTwoClicked}>ButtonTwo</button>
				<button onClick={this.test}>test</button>
				{children}
				<div>--------------------</div>
				<ChildTwo id={1} />
			</div>
		)
	}
}
export default Testing