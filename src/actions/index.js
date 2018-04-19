import * as types from '../constants/actionTypes';

// Default function to display redux action format
export const defaultFunction = (sampleData) => ({
  // Action object format being returned to a reducer
  type: types.FETCH_DATA,
  data: sampleData
});