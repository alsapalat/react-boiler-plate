import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Router from 'react-router/lib/Router';
import configureStore from './Stores';
import { routes } from './Routes';
import { syncHistoryWithStore } from 'react-router-redux';
import browserHistory from './History';

//import _ from 'lodash';

//import GLOBAL CSS
import './assets/css/bootstrap.min.css';
import './assets/css/bootstrap-theme.min.css';
import './assets/css/font-awesome.min.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

history.listen(location => {
	try {
		//const { pathname } = location;
        //const token = sessionStorage.getItem('token');

        // if(!_.isNil(token)) {
        //     if(pathname === "/") {
        //         return history.push('/home')
        //     }
        // } 

        // if(_.isNil(token) && pathname !== "/" && pathname !== "password/reset") {
        //      return history.push("/");
        // }
	} catch(err) {
		console.log(err);
	}
})

render(
    <Provider store={ store }>
        <Router 
            history={ history } 
            routes={ routes } />
    </Provider>,
    document.getElementById('root')
);