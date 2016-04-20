import React from 'react'
import { connect } from 'react-redux'

import { DropdownButton, MenuItem }  from 'react-bootstrap'

const mapStateToProps = (state, ownProps) => {
	return {
		showDropZoneDragOverState: state.editor.showDropZoneDragOverState
	}
}

@connect(mapStateToProps)
class HoverSelector extends React.Component {
	constructor(props) {
		super(props)

		this.onSelect = this.onSelect.bind(this)
	}

	onSelect(e, key) {
		STORE.dispatch({
			type: 'SET_DROPZONE_DRAG_OVER_STATE',
			value: key
		})
	}

	render() {
		var { showDropZoneDragOverState } = this.props

		var hoverSelectorAttr = {
			className: 'pull-left'
		}

		var dropDownButtonAttr = {
			title: 'showDropZoneDragOverState: ' + (showDropZoneDragOverState ? 'on' : 'off' ),
			id: 'hover-selector',
			onSelect: this.onSelect,
			style: {
				margin: '5px 0 0 5px',
    			opacity: 0.3
			}
		}

		return (
			<div {...hoverSelectorAttr}>
				<DropdownButton {...dropDownButtonAttr}>
					<MenuItem key={0} eventKey={true}>on</MenuItem>
					<MenuItem key={1} eventKey={false}>off</MenuItem>
				</DropdownButton>
			</div>
		);


	}
}

export default HoverSelector


