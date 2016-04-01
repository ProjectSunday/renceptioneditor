import React from 'react'
import { connect } from 'react-redux'


// import TestTwo from './testtwo'


const mapStateToProps = (state, ownProps) => {
	return Object.assign({}, state.testValues.find(s => s.id == ownProps.id).value)
}

@connect(mapStateToProps)
class ChildTwo extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
	}
	shouldComponentUpdate(nextProps) {
		console.log('ChildTwo.shouldComponentUpdate', nextProps)
		return true
	}
	render() {
		console.log('ChildTwo.render ', this.props)
		return (
			<div>
				I am asdfsdf {this.props.value}
			</div>
		)
	}
}
export default ChildTwo