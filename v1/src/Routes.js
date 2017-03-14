import App from './App';
import Home from './Home';
import PageNotFound from './PageNotFound';

export const routes = {
    path: '/',
    component: App,//({ children }) => children,
    indexRoute: {
    	component: Home
    },
    childRoutes: [
        //require('./example/routes'),
        {
        	path: '*',
        	component: PageNotFound
        }
    ]
}