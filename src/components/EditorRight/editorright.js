import React from 'react'
import { connect } from 'react-redux'

import './editorright.less'

import Slot from './slot/slot'

const mapStateToProps = (state) => {
	return state.editorRight
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
					<Slot key={i} id={s} />
				)}
			</div>
		)
	}
}

export default EditorRight
