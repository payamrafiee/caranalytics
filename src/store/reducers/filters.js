import { RESET, FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from '../actionTypes';

const INITIAL_STATE = {
  loading: false,
  error: '',
  dataset: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        dataset: action.payload,
      };
    case FETCH_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RESET:
      return (state = INITIAL_STATE);
    default:
      return state;
  }
};
