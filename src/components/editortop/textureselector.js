import React from 'react'
import { connect } from 'react-redux'

import { DropdownButton, MenuItem } from 'react-bootstrap'

const mapStateToProps = (state, ownProps) => {
	return {
		textures: state.editor.textures,
		activeTexture: state.editor.activeTexture
	}
}
@connect(mapStateToProps)
class TextureSelector extends React.Component {
	constructor(props) {
		super(props)

		this.onSelect = this.onSelect.bind(this)
	}
	onSelect(e, key) {
		var { textures } = this.props
		var activeTexture = textures[key]
		STORE.dispatch({
			type: 'SET_ACTIVE_TEXTURE',
			activeTexture
		})
	}
	render() {
		var { activeTexture, textures } = this.props

		var nodes = [];
		textures.forEach((t, i) => {
			nodes.push(<MenuItem key={i} eventKey={i}>{t}</MenuItem>);
		});



		var textureSelectorAttr = {
			className: 'pull-left'
		}

		var dropDownButtonAttr = {
			id: 'dropdown-size-medium',
			title: activeTexture,
			onSelect: this.onSelect,
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


