import React from 'react';
import Ball from './Ball';
import '../styles/Lottery.css';

export default class Lottery extends React.Component {
	// Props
	static defaultProps = {
		title    : 'Lottery Simple App',
		// numBalls to display
		numBalls : 6,
		// max value of a ball
		maxNum   : 50
	};

	// States
	constructor(props) {
		super(props);
		this.state = {
			nums : Array.from({ length: this.props.numBalls })
		};
		this.handleClick = this.handleClick.bind(this);
	}

	// generate an array of random numbers
	generate() {
		this.setState((curState) => ({
			nums : curState.nums.map((n) => Math.floor(Math.random() * this.props.maxNum) + 1)
		}));
	}

	handleClick() {
		this.generate();
	}

	render() {
		return (
			<section className="Lottery">
				<h1>{this.props.title}</h1>
				<div>{this.state.nums.map((n) => <Ball num={n} />)}</div>
				<button onClick={this.handleClick}>Tirage du loto !</button>
			</section>
		);
	}
}
