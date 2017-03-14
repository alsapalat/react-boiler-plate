import React, { Component } from 'react';
import Link from 'react-router/lib/Link';

class Home extends Component{
	render(){
		return(
			<div>
				<div className="row">
					<div className="col-md-12 text-center">
						<h1>Home Page</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-md-offset-4">
						<div className="well text-center">
							<Link to="/not-found">Go to not found</Link>
							<h1><i className="glyphicon glyphicon-ok" /> Bootstrap Test</h1>
							<h1><i className="fa fa-check-circle" /> Font Awesome</h1>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Home