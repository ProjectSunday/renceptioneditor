import React from 'react'
import { connect } from 'react-redux'

// import { addBlock } from '../../Actions/actions'

import './editorright.less'

import Slot from './Slot/slot'


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
					<Slot key={i} id={s.id} index={i} />
				)}
			</div>
		)
	}
}

export default EditorRight
