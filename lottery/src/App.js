import React from 'react';
import './styles/App.css';
import Lottery from './components/Lottery';

export default class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Lottery />
			</div>
		);
	}
}
