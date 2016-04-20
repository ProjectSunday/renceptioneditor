import React from 'react'
import { connect } from 'react-redux'

import { DropdownButton, MenuItem } from 'react-bootstrap'

const mapStateToProps = (state, ownProps) => {
	return {
		textures: state.editor.textures
	}
}
@connect(mapStateToProps)
class TextureSelector extends React.Component {
	constructor(props) {
		super(props)

	}
	render() {
		var { textures } = this.props

		var nodes = [];
		textures.forEach((t, i) => {
			nodes.push(<MenuItem key={i} eventKey={i}>{t}</MenuItem>);
		});



		var textureSelectorAttr = {
			className: 'pull-left'
		}

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
			<div {...textureSelectorAttr}>
				<DropdownButton {...dropDownButtonAttr}>
					{nodes}
				</DropdownButton>
			</div>
		);
	}
}

export default TextureSelector


