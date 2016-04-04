import React from 'react'
import { connect } from 'react-redux'

import './editorright.less'

import Slot from './slot/slot'

const mapStateToProps = (state) => {
	return {
		editorRight: state.editorRight
	}
}

@connect(mapStateToProps)
class EditorRight extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
	}
	render() {
		const { editorRight } = this.props
		return (
			<div id="editorright" className="row">
				{editorRight.slots.map((s, i) =>
					<Slot key={i} id={s} />
				)}
			</div>
		)
	}
}

export default EditorRight
