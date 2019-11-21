import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import hostReducer from './hostReducer';
import visitorReducer from './visitorReducer';

export default combineReducers({
  form: formReducer,
  hosts: hostReducer,
  visitors: visitorReducer
});
