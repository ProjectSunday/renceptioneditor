import React from 'react'
import { connect } from 'react-redux'


const mapStateToProps = (state, ownProps) => {
	return {
		childOne: state.testValues.find(c => c.id == ownProps.id)
	}
}
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		initializeDropZone: () => {
			console.log('dispatch INITIALIZE_DROPZONE')
			dispatch({ type: 'INITIALIZE_DROPZONE' })
		}
	}
}

@connect(mapStateToProps, mapDispatchToProps)
class ChildTwo extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
		this.props.initializeDropZone()
	}
	shouldComponentUpdate(nextProps) {
		console.log('ChildTwo.shouldComponentUpdate', nextProps)
		return true
	}
	render() {
		console.log('ChildTwo.render ', this.props)
		return (
			<div>
				I am ChildTwo props: {JSON.stringify(this.props)}
			</div>
		)
	}
}
export default ChildTwo