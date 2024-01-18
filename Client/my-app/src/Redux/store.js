import { combineReducers, createStore } from 'redux'
import branchesReducer from './Reducers/branchesReducer'


const reducer = combineReducers({ branchesReducer });

const store = createStore(reducer);
window.store = store;
export default store;