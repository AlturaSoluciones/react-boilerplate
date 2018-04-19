import { combineReducers } from 'redux';
import { defaultReducer } from '../reducers/defaultReducer';

const appReducers = combineReducers({
  // add reducer files references her to combine them
  defaultReducer
});

export default appReducers;