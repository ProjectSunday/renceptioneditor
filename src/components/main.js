import React from 'react'
import { connect } from 'react-redux'

import EditorTop from './editortop/editortop'
import EditorLeft from './editorleft/editorleft'
import EditorRight from './editorright/editorright'

import Testing from './testing/testing'

const mapStateToProps = (state, ownProps) => {
	return {
		activeTexture: state.editor.activeTexture
	}
}

@connect(mapStateToProps)
class Main extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		var { activeTexture } = this.props

		var background = `url(texture_${activeTexture}.png)`

		var midAttr = {
			className: 'clearfix',
			style: {
				background: background
			}
		}

		var leftAttr = {
			className: 'col-xs-4 pull-left',
			style: {
				marginBottom: '15px',
				paddingRight: '0px'
			}
		}

		var rightAttr = {
			className: 'col-xs-8 pull-right',
			style: {
				marginBottom: '15px'
			}
		}
		return (
			<div>
				<EditorTop />
				<div {...midAttr}>
					<div {...leftAttr}>
						<EditorLeft />
					</div>
					<div {...rightAttr}>
						<EditorRight />
					</div>
				</div>
			</div>
		)
	}
}
export default Main