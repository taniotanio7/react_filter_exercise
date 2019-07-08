import * as types from '../types/people';

export const updateFilterQuery = payload => ({
  type: types.CHANGE_FILTER_QUERY,
  payload: payload
})