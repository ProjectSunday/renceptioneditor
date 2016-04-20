import React from 'react'

import TextureSelector from './textureselector'
import HoverSelector from './hoverselector'

class DesignTools extends React.Component {
	constructor(props) {
		super(props)

		this.addSampleBlocks = this.addSampleBlocks.bind(this)
		this.clearAllBlocks = this.clearAllBlocks.bind(this)
		
		// this.render = this.render.bind(this)
	}

	addSampleBlocks() {
		STORE.dispatch({
			type: 'ADD_SAMPLE_BLOCKS'
		})
	}

	clearAllBlocks() {
		STORE.dispatch({
			type: 'CLEAR_ALL_BLOCKS'
		})
	}

	render() {

		// var events = this.props.events;
		// var textures = this.props.textures;
		// var activeTexture = this.props.activeTexture;
		// var dropZoneDragOverState = this.props.dropZoneDragOverState;


		var designToolsAttr = {
			className: 'design-tools'
		}

		var buttonStyle = {
			margin: '5px 0 0 5px',
			opacity: 0.3
		}

		var bringTheRainAttr = {
			type: 'button',
			className: 'btn btn-default pull-left',
			onClick: this.addSampleBlocks,
			style: {
				...buttonStyle
			}
		}

		var wipeTheFloorAttr = {
			type: 'button',
			className: 'btn btn-default pull-left',
			onClick: this.clearAllBlocks,
			style: {
				...buttonStyle
			}
		}


		return (
			<div {...designToolsAttr}>
				<button {...bringTheRainAttr}>Bring The Rain</button>
				<button {...wipeTheFloorAttr}>Wipe The Floor</button>
				<TextureSelector />
				<HoverSelector />
			</div>
		)

	}
}


		// <TextureSelector 
		// 			events={events}
		// 			textures={textures}
		// 			activeTexture={activeTexture}
		// 		/>
		// 		<HoverSelector
		// 			events={events}
		// 			dropZoneDragOverState={dropZoneDragOverState}
		// 		/>

export default DesignTools

