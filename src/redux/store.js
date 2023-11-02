import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as authReducer } from './auth/reducer';

const rootElement = combineReducers({ authReducer });

export const store = legacy_createStore(rootElement, applyMiddleware(thunk));
    