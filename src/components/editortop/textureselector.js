import React from 'react'

import { DropdownButton, MenuItem } from 'react-bootstrap'

class TextureSelector extends React.Component {
	constructor(props) {
		super(props)

		this.render = this.render.bind(this)
	}
	render() {
		// var textures = this.props.textures;

		// var textureOptions = [];
		// textures.forEach(function (texture, i) {
		// 	textureOptions.push(
		// 		<MenuItem key={i} eventKey={i}>{texture}</MenuItem>
		// 	);
		// });

		var textureSelector = {
			className: 'pull-left'
		}

		var textureOptions = <MenuItem key={0} >MenuItemasdf</MenuItem>

		var dropDownButtonAttr = {
			id: 'dropdown-size-medium',
			title: 'title', //textures[this.props.activeTexture]
			// onSelect: this.props.events.textureChange
			style: {
				margin: '5px 0 0 5px',
    			opacity: 0.3
			}
		}

		return (
			<div {...textureSelector}>
				<DropdownButton {...dropDownButtonAttr}>
					{textureOptions}
				</DropdownButton>
			</div>
		);
	}
}

export default TextureSelector


