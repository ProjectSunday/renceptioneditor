import React from 'react'
import { connect } from 'react-redux'

import ChildOne from './childone'

const mapStateToProps = (state, ownProps) => {
	return {
		testing: state.testing
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		buttonOneClicked () {
			console.log('buttonOneClicked')
			dispatch({ type: 'TESTVALUES_SET_VALUE', id: 1, value: 'changed' })
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
	}
	shouldComponentUpdate(nextProps) {
		console.log('Testing.shouldComponentUpdate', nextProps)
		return true
	}
	render() {
		console.log('Testing.render ', this.props)
		const { testing, buttonOneClicked, buttonTwoClicked } = this.props
		var children = []

		testing.forEach((t, i) => {
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
				{children}
			</div>
		)
	}
}
export default Testing