import { createStore, applyMiddleware } from 'redux';
import reducer from "../reducer";
import thunkMiddleware from 'redux-thunk';

const middlewares = [thunkMiddleware];
export const store = createStore(reducer, applyMiddleware(...middlewares));