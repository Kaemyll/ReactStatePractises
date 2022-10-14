import React from 'react';
import '../styles/Ball.css';

export default class Ball extends React.Component {
	render() {
		return <div className="Ball">{this.props.num}</div>;
	}
}
