import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { post } from './reducers/post'

const rootReducer = combineReducers({
    post
})

export default createStore(rootReducer, applyMiddleware(thunk))