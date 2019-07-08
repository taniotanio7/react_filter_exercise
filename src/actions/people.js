import * as types from '../types/people';

// this is an example action
export const doNothing = (payload) => ({
  type: types.DO_NOTHING,
  payload: payload
});

export const updateFilterQuery = payload => ({
  type: types.CHANGE_FILTER_QUERY,
  payload: payload
})