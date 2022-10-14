import React from 'react';
import Ball from './Ball';

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
			nums : []
		};
	}

	// Methods that regenerate nums in state
	// generate = () => {
	//     onclick = {this.generate}
	// }

	render() {
		return (
			<div>
				<h1>Lottery Simple APP</h1>
				<div>
					<Ball num={17} />
				</div>
			</div>
		);
	}
}
