// import 'babel-core/polyfill'  //i guess this needs to be first?

import './index.html'

import './favicon.ico'

import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import './index.less'






import React from 'react'
import { render } from 'react-dom'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext, DropTarget } from 'react-dnd'
import ReactTransitionGroup from 'react-addons-transition-group'


@DragDropContext(HTML5Backend)
class App extends React.Component {
	constructor() {
		super()
		this.render = this.render.bind(this)
		this.addNormalChild = this.addNormalChild.bind(this)
		this.addDropTargetChild = this.addDropTargetChild.bind(this)
		this.state = {
			normalChild: 0,
			dropTargetChild: 0

		}
	}
	addNormalChild () {
		this.setState({ normalChild: this.state.normalChild + 1 })
	}
	addDropTargetChild () {
		this.setState({ dropTargetChild: this.state.dropTargetChild + 1 })
	}

	render() {
		const children = []

		for (let i = 0; i < this.state.normalChild; i++) {
			children.push(<NormalChild key={'n' + i} />)
		}

		for (let i = 0; i < this.state.dropTargetChild; i++) {
			children.push(<DropTargetChild key={'d' + i} />)
		}

		return (
			<div>
				<button onClick={this.addNormalChild}>Add Normal Child</button>
				<button onClick={this.addDropTargetChild}>Add DropTargetChild Child</button>
				{children}
			</div>
		)
	}
}

class MovingChild extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
	}
	componentWillEnter(callback) {
		console.log('MovingChild.componentWillEnter')  //you won't see this
		setTimeout(callback, 0)
	}
	componentDidMount() {
		console.log('MovingChild.componentDidMount')  //however, you will see this
	}
	render() {
		debugger;
		return (
			<div>
				Moving Child
			</div>
		)
	}
}


/*********************************/
/*     DropTargetChild           */
/*********************************/

const dropTarget = {
	hover (props, monitor, component) {
		console.log('Hovering does work')
	}
}
@DropTarget('BLOCK', dropTarget, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
}))
class DropTargetChild extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
		this.state = {
			children: []
		}
	}
	componentWillEnter(callback) {
		console.log('DropTargetChild.componentWillEnter')  //you won't see this
		setTimeout(callback, 0)
	}
	componentDidMount() {
		console.log('DropTargetChild.componentDidMount')  //however, you will see this
	}
	render() {
		const { connectDropTarget } = this.props

		console.log('bal');

		var children = [];
		var i = 0;

		const addMovingChild = () => {
			var blah = this.state.children;

			blah.push(<MovingChild key={'mv' + i} />);
			i++

			this.setState({
				children: blah
			})

		}

		return connectDropTarget(
			<div>
				<ReactTransitionGroup component="div">
					{this.state.children}
				</ReactTransitionGroup>
				<div>I am DropTargetChild</div>
				<button onClick={addMovingChild}>addMovingChild</button>
			</div>
		)
	}
}


/*********************************/
/*     NormalChild               */
/*********************************/

class NormalChild extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
	}
	componentWillEnter(callback) {
		console.log('NormalChild.componentWillEnter')  //works
		setTimeout(callback, 0)
	}
	componentDidMount() {
		console.log('NormalChild.componentDidMount')  //wrks
	}
	render() {
		const { connectDropTarget } = this.props
		return (
			<div>
				I am NormalChild
			</div>
		)
	}
}

render(<App />,	document.getElementById('main'))

