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

				// button
				// 	margin: 5px 0 0 5px
				// 	opacity: 0.3

			}
		}

		var titleAttr = {
			style: {
				fontSize: '20px'
			}
		}

		return (
			<div {...editorTopAttr}>
				<DesignTools />
				<div className="clearfix" />
				<div {...titleAttr}>
					This is a mockup demo for the Cloud Editor's proposed drag and drop ability.
				</div>
			</div>
		)

	}
}

export default EditorTop

