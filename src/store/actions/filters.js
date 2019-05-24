import { instance } from '../../services/api';
import { RESET, FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from '../actionTypes';

export const reset = () => ({
  type: RESET,
});

export const setFilters = filters => async dispatch => {
  dispatch({ type: FETCH_DATA });
  try {
    const data = await instance.post('posts', {
      data: filters,
    });
    return dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
  } catch (e) {
    return dispatch({ type: FETCH_DATA_FAIL, payload: e });
  }
};
