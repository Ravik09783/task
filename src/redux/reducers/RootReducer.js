import { combineReducers } from 'redux';
import { cartReducers } from './reducers';

const root = combineReducers({
    cartReducers,
})

export default root;