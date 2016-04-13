import React from 'react'

import { DropdownButton, MenuItem }  from 'react-bootstrap'

class HoverSelector extends React.Component {
	constructor(props) {
		super(props)

		this.render = this.render.bind(this)
	}
	render() {
		// var events = this.props.events;

		var hoverSelectorAttr = {
			className: 'pull-left'
		}

		var dropDownButtonAttr = {
			title: 'title', //{ 'Drag Over State: ' + this.props.dropZoneDragOverState }
			id: 'hover-selector',
			// onSelect: {events.dropZoneDragOverStateChange}
			style: {
				margin: '5px 0 0 5px',
    			opacity: 0.3
			}
		}



		return (
			<div {...hoverSelectorAttr}>
				<DropdownButton {...dropDownButtonAttr}>
					<MenuItem key={0} eventKey="hidden">hidden</MenuItem>
					<MenuItem key={1} eventKey="show">show</MenuItem>
				</DropdownButton>
			</div>
		);


	}
}

export default HoverSelector


