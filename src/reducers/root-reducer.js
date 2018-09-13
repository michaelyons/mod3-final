import { combineReducers } from 'redux';
import { initialInfoReducer } from './initialInfoReducer';
import { membersReducer } from './membersReducer';

const rootReducer = combineReducers({
  initialInfo: initialInfoReducer,
  members: membersReducer
});

export default rootReducer;
