import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './Reducers';
import { batchActions, enableBatching } from 'redux-batched-actions';
import alert from 'react-s-alert';
import _ from 'lodash';
import history from './History';
import config from '../config/app';

const getSession = (key) => {
	return sessionStorage.getItem(key)
}

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware.withExtraArgument({ 
        batchActions, 
        history, 
        getSession, 
        alert, 
        config,
        _
    })
)(createStore);

export default function configureStore(initialState = {}) {
    return createStoreWithMiddleware(enableBatching(rootReducer), initialState);
}