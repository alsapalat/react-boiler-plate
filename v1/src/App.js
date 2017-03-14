import React, { Component } from 'react';

class App extends Component{
	render(){

		const { children } = this.props;

		return(
			<div>
				<nav className="navbar navbar-default">
					<div className="container-fluid">

					</div>
				</nav>
				{children}
			</div>
		)
	}
}

export default App