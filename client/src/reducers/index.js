import { combineReducers } from 'redux';
import user from './user';
import cart from './cartReducer'
import flash from './flash';

const rootReducer = combineReducers({
  user,
  flash,
  cart
});

export default rootReducer;
