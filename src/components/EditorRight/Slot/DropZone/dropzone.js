import React from 'react'
// // import { connect } from 'react-redux'
import { findDOMNode } from 'react-dom'


// import ReactTransitionGroup from 'react-addons-transition-group'
// import { DragSource, DropTarget } from 'react-dnd'

// import { dragBlock } from '../../../../Actions/actions'

// import './block.less'

// const blockSource = {
// 	beginDrag(props) {
// 		return {
// 			block: props.block,
// 			index: props.index
// 		}
// 	}
// }

// const blockTarget = {
// 	hover(props, monitor, component) {

// 		// console.log(component);


// 	}
// }

// // const mapDispatchToProps = (dispatch, ownProps) => {
// // 	return {
// // 		onDragStart: () => {
// // 			dispatch(dragBlock(ownProps.slotId, ownProps.block.id))
// // 		}
// // 	}
// // }


// // @connect(undefined, mapDispatchToProps)
// @DropTarget('BLOCK', blockTarget, (connect, monitor) => ({
// 	connectDropTarget: connect.dropTarget(),
// 	isOver: monitor.isOver()
// }))
// @DragSource('BLOCK', blockSource, (connect, monitor) => ({
// 	connectDragSource: connect.dragSource(),
//   	isDragging: monitor.isDragging()
// }))
// class DropzoneChild extends React.Component {
// 	constructor() {
// 		super()
// 		this.render = this.render.bind(this)
// 		this.state = {
// 			height: 20
// 		}
// 	}

// 	componentWillAppear(callback) {
// 		console.log('componentWillAppear');

// 		// this.refs.child.style.height = 100

// 		// console.log(child);

// 		// findDOMNode(this.refs.child).style.height = 500;

// 		callback();
// 	}


// 	componentDidAppear() {
// 		console.log('componentDidAppear');

// 		console.log('111', this.refs.child.style.height)
// 		this.setState({
// 			height: 200
// 		});

// 		console.log('222', this.refs.child.style.height)

// 		// let child = findDOMNode(this.refs.child);

// 		// child.style.height = '500px';

// 		// console.log(this.refs.child)
// 	}

// 	render() {

// 		const { blah } = this.props

// 		let styles = {
// 			height: this.state.height,
// 			transition: 'height 3s ease-in-out'
// 		}

// 		return (
// 			<div ref="child" style={styles}> dropzone child {blah} </div>
// 		)
// 	}



// }

export default class Dropzone extends React.Component {

	constructor() {
		super()
		this.render = this.render.bind(this)
		// this.handleClick = this.handleClick.bind(this)
		// this.componentDidEnter = this.componentDidEnter.bind(this)
		// this.componentWillAppear = this.componentWillAppear.bind(this)
		// this.componentDidAppear = this.componentDidAppear.bind(this)

		// this.state = { 
		// 	things: [ 'a' ]
		// }

	}

	// componentDidUpdate() {
	// 	console.log('componentDidUpdate');
	// // 	// console.count();

	// // 	// console.log('refs', this.refs);
	// // 	// console.log('props', this.props);

	// // 	// // this.refs.dropzone.style.height = '50px'
	// // 	// // this.refs.dropzone.style['background-color'] = 'green'

	// // 	// let blah = findDOMNode(this.refs.dropzone);

	// // 	// blah.style['height'] = '50px'

	// // 	// console.groupEnd();

	// }

	// componentWillAppear(callback) {
	// 	console.log('componentWillAppear')

	// 	// let blah = findDOMNode(this.refs.dropzone)

	// 	// blah.style.height = '30px'
	// 	// blah.style.transition = 'height 3s ease-in-out'

	// 	setTimeout(callback, 0)

	// }

	// componentDidAppear() {


	// 	console.log('componentDidAppear')

	// 	// console.log('111', this.refs.child.style.height)
	// 	// this.setState({
	// 	// 	height: 200
	// 	// });
	// 	// let blah = findDOMNode(this.refs.dropzone)

	// 	// console.log('111', blah.style.height, blah.style.transition)

	// 	// blah.style.height = '100px'
	// 	// blah.style.opacity = 1


	// 	// console.log('222', blah.style.height, blah.style.transition)



	// 	// child.style.height = '500px';

	// 	// console.log(this.refs.child)

	// 	// callback()
	// }





	componentWillEnter(callback) {
	// 	console.log('componentWillEnter')

	// 	let blah = findDOMNode(this.refs.dropzone)

	// 	// blah.style.opacity = 0
	// 	// blah.style.transition = 'opacity 1s'

	// 	// console.log('aaa', blah.style.height)
	// 	// blah.style.height = '0px';
	// 	// console.log('bbb', blah.style.height)
	// 	// blah.style.transition = 'height 1s'

		setTimeout(callback, 0)

	// callback()

	}

	componentDidEnter() {


		console.log('componentDidEnter')

		// console.log('111', this.refs.child.style.height)
		// this.setState({
		// 	height: 200
		// });
		let blah = findDOMNode(this.refs.dropzone)

		console.table(blah.style)
		console.log('111', blah.style.height, blah.style.transition)

		// blah.style.height = '100px'



		blah.style.height = '50px'
		// blah.style.opacity = 1

		console.log('222', blah.style.height)
		// child.style.height = '500px';

		// console.log(this.refs.child)

	}


	// componentDidMount() {
	// 	console.log('componentDidMount');
	// // 	console.count();

	// // 	// console.log('refs', this.refs);
	// // 	// console.log('props', this.props);

	// // 	// this.refs.dropzone.style.height = '50px'
	// // 	// this.refs.dropzone.style['background-color'] = 'green'


	// // 	// let blah = findDOMNode(this.refs.dropzone);

	// // 	// blah.style['height'] = '50px'


	// // 	// let blah = findDOMNode(this.refs.dropzone);

	// // 	// blah.style['height'] = '50px'
		
	// // 	// this.setProps({
	// // 	// 	blah: 'blah'
	// // 	// })

	// // 	// this.setState({
	// // 	// 	isMounted: true
	// // 	// })

	// // 	console.groupEnd();
	// // }

	// // handleClick() {
	// // 	console.log('handleClick');

	// // 	var things = this.state.things.splice();

	// // 	things.push("b");

	// // 	this.setState({
	// // 		things: things
	// // 	});

	// }

	render() {

		// console.group('dropzone render')
		// console.count()

		// const { isAppearing, blah } = this.props;
	

		console.log('block render')

		// console.log(isAppearing, blah)
		// var styles = {
		// 	background: 'pink',
		// 	height: '100%',
		// 	width: '100%',
		// }

		// console.log('isMounted', this.state.isMounted)


		// let child = []

		// if (this.state.isMounted) {

		// 	var innerStyles = {
		// 		background: 'orange',
		// 		height: 200,
		// 		width: '100%',
		// 		transition: 'height 3s ease'
		// 	}

		// 	child = <div style={innerStyles}>
		// 		DROPZONEDROPZONEDROPZONEDROPZONEDROPZONPZONE
		// 	</div>
		// }


		// this.state.things.forEach((t, i) => {
		// 	child.push(<DropzoneChild key={i} blah={t} />)
		// });




		// console.table(innerStyles);

		// console.log('child ', child)

		// console.groupEnd()

		var style = {
			background: 'green',
			height: 0,
			transition: 'height 0.5s'
		}

		return (
			<div ref="dropzone" style={style}>
				DROPZONEDROPZONEDROPZONEDROPZONEDROPZONPZONE
			</div>
		)





// 		console.log('block render', block.id)


// 		//hmn figure out how to add in moving pieces
// 		let styles = { display: isDragging ? 'none' : 'block' }
// 		//acity: isDragging ? 0.75 : 1 }

// 		if (isOver) {
// 			styles.background = '#eee'
// 		}
		
// 		// let blockInnards = <div className="innards" style={ { height: 50 } }>NNNNNNNNNNNNNNNNNNNNNNNN</div>

// 		return connectDragSource(connectDropTarget(
// 			<div className="block" style={styles}>
// 				<span className="name">{block.name}{block.id}</span>
// 				I am a block
// 			</div>
// 		))
	}

}

