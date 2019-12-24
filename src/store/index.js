import { createStore, combineReducers } from 'redux'
import { post } from './reducers/post'

const rootReducer = combineReducers({
    post
})

export default createStore(rootReducer)