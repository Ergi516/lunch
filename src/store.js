import { createStore, combineReducers, applyMiddleware } from 'redux';

import promiseMiddleware from 'redux-promise-middleware';

import appReducer from './reducers/appReducers';
import restaurantsReducer from './reducers/restaurantsReducers';
const middleware = [promiseMiddleware]
const store = createStore(combineReducers({
  appReducer,
  restaurantsReducer,
}), applyMiddleware(...middleware));

export default store;