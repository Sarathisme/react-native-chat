import {createStore, combineReducers} from 'redux';
import userReducer from './userReducer';
import chatReducer from './chatReducer';

const store = createStore(combineReducers({'userReducer': userReducer, 'chatReducer':chatReducer}));

export default store;