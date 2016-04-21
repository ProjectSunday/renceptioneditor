import React from 'react'
import DesignTools from './designtools'

class EditorTop extends React.Component {
	constructor(props) {
		super(props)

		this.render = this.render.bind(this)
	}

	render() {
		var editorTopAttr = {
			style: {
				height: '70px',
				background: '#f3f3f3',
				textAlign: 'center'
			}
		}

		var titleAttr = {
			style: {
				fontSize: '20px'
			}
		}

		// var title = 'yo'
		var title = 'This is a mockup demo for the Cloud Editor\'s proposed drag and drop ability.'

		return (
			<div {...editorTopAttr}>
				<DesignTools />
				<div className="clearfix" />
				<div {...titleAttr}>
					{title}
				</div>
			</div>
		)

	}
}

export default EditorTop

