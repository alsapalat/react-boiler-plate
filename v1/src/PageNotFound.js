import React, { Component } from 'react';
import Link from 'react-router/lib/Link';

class App extends Component{
	render(){
		return(
			<div>
				<div className="row">
					<div className="col-md-12 text-center">
						<h1>Page Not Found</h1>
						<Link to="/">Return Home</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default App