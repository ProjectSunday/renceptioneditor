import React from 'react'
import { connect } from 'react-redux'


const mapStateToProps = (state, ownProps) => {
	return Object.assign({}, state.aaatestValues.find(s => s.id == ownProps.id))
}

@connect(mapStateToProps)
class ChildOne extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
	}
	shouldComponentUpdate(nextProps) {
		console.log('ChildOne.shouldComponentUpdate', nextProps)
		return true
	}
	render() {
		console.log('ChildOne.render ', this.props)
		const { id, value } = this.props
		return (
			<div>
				ChildOne id: {id}   {value} 
			</div>
		)
	}
}
export default ChildOne