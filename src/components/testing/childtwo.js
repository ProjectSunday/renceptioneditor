import React from 'react'
import { connect } from 'react-redux'


const mapStateToProps = (state, ownProps) => {
	console.log('ChildTwo.mapStateToProps', ownProps)


	// console.log('1111', window.rentest === state.ui[0])

	// window.rentest = state.ui[0]

	return state.testing.childTwoDirect

	// return {
	// 	// childOne: state.testValues.find(c => c.id == ownProps.id),
	// 	ui: state.ui[0]
	// }
}

@connect(mapStateToProps)
class ChildTwo extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
		// this.props.initializeDropZone()
	}
	shouldComponentUpdate(nextProps) {
		console.log('ChildTwo.shouldComponentUpdate', nextProps)
		return false
	}
	render() {
		// console.log('ChildTwo.render ', this.props){JSON.stringify(this.props)}
		console.log('childtwo.render')
		return (
			<div>
				I am ChildTwo props {this.props}
			</div>
		)
	}
}
export default ChildTwo