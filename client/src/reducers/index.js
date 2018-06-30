import { combineReducers } from 'redux';
import user from './user';
import cart from './cartReducer'
import flash from './flash';
import items from './items'

const rootReducer = combineReducers({
  user,
  flash,
  cart,
  items
});

export default rootReducer;
