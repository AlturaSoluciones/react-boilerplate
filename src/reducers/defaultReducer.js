// Default reducer
// Note: Feel free to remove this reducer and create your own

import * as types from '../constants/actionTypes';

const defaultReducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_DATA:
      return action.data;
    default:
      return state;
  }
};

export default defaultReducer;