import {combineReducers} from 'redux';
import systemReducer from './system/system.reducer';
import userReducer from './user/user.reducer';

const appReducers = combineReducers({
  system: systemReducer,
  user: userReducer,
});

const rootReducers = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }

  return appReducers(state, action);
};

export default rootReducers;
