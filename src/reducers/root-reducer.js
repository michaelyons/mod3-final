import { combineReducers } from 'redux';
import { initialInfoReducer } from './initialInfoReducer';

const rootReducer = combineReducers({
  initialInfo: initialInfoReducer
});

export default rootReducer;
