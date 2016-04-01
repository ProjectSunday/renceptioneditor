import React from 'react'
import { connect } from 'react-redux'

import './editorright.less'

import Slot from './slot/slot'

const mapStateToProps = (state) => {
	return {
		slots: state.slots
	}
}

@connect(mapStateToProps)
class EditorRight extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
	}
	render() {
		const { slots } = this.props
		return (
			<div id="editorright" className="row">
				{slots.map((s, i) => 
					<Slot key={i} {...s} />
				)}
			</div>
		)
	}
}

export default EditorRight
