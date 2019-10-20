import { combineReducers } from 'redux'
import addNews from './addNews'
import {routerReducer} from 'react-router-redux'
import Tags from "./Tags";
export default combineReducers({
    Tags,
    addNews,
    routing: routerReducer
})
