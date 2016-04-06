import React from 'react'
import { connect } from 'react-redux'

const TRANSITION_DELAY = 100

const mapStateToProps = (state, ownProps) => {
	return Object.assign({}, state.dropZones.find(d => d.slotId == ownProps.slotId && d.id == ownProps.id))
}

@connect(mapStateToProps)
class DropZone extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
		this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this)
		// this.componentDidUpdate = this.componentDidUpdate.bind(this)
		// this.componentDidMount = this.componentDidMount.bind(this)

		this.onDrop = this.onDrop.bind(this)
		this.onDragOver = this.onDragOver.bind(this)
	}
	shouldComponentUpdate(nextProps) {
		var self = this
		// if (!nextProps.enable) { return false }
		// console.log('dropzone.shouldComponentUpdate visible:', nextProps.visible, 'instant:', nextProps.instant)


		self.refs.dropZone.style.transition = nextProps.instant ? '' : `height ${TRANSITION_DELAY}ms`

		var height = nextProps.visible ? '50px' : '0px'
		setTimeout(function () {
			self.refs.dropZone.style.height = height
		}, 0)

		return false
	}
	// componentDidUpdate(prevProps) {
	// 	console.log('dropzone2.componentDidUpdate')
	// }

	// componentDidMount() {
	// 	console.log('dropzone2.componentDidMount')
	// 	// this.refs.dropZone.style.transition = this.props.instant ? '' : `height ${TRANSITION_DELAY}ms`
	// }

	onDragOver(e) {
		e.preventDefault()
	}

	onDrop() {

		var { slotId: toSlotId, id: dropZoneId } = this.props

		STORE.dispatch(function (dispatch, getState) {
			var state = getState()
			var { blockId, slotId: fromSlotId } = state.ui.dragBlock

			dispatch(
				moveBlock(fromSlotId, blockId)
			).then(() => {
				var promises = [ dispatch(initializeSlotChildren(fromSlotId)) ]
				if (toSlotId != fromSlotId) {
					promises.push( dispatch(initializeSlotChildren(toSlotId)) )
				}
				return Promise.all(promises)
			})
		})

		function moveBlock(fromSlotId, blockId) {
			return {
				type: 'SLOT_MOVE_BLOCK', 
				fromSlotId, 
				blockId, 
				toSlotId, 
				dropZoneId
			}
		}

		function initializeSlotChildren(slotId) {
			var { blocks } = state.slots.find(s => s.id == slotId)
			return {
				type: 'UI_INITILIZE_SLOT_CHILDREN',
				slotId,
				blocks
			}
		}

	}

	render() {
		// console.log('dropzone.render ', this.props)
		const { connectDropTarget, id, instant, visible } = this.props

		// let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
		const style = {
			height: visible ? '50px' : '0px',
 			// transition: instant ? '' : `height ${TRANSITION_DELAY}ms`,
			// background: randomColor,
			background: '#555',
			// height: '0px',
			// height: '20px',
		}

		const indexStyle = {
			background: 'black',
			color: 'yellow'
		}

		return (
			<div ref="dropZone" style={style} onDrop={this.onDrop} onDragOver={this.onDragOver}>
				dropzone index: <span style={indexStyle}>{id}</span>
			</div>
		)
	}
}
export default DropZone

