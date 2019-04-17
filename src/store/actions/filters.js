import { RESET, SET_PRICE, SET_TYPE } from '../actionTypes';

export const setPrice = (value) => ({
  type: SET_PRICE,
  payload: value
})

export const setType = (type) => ({
  type: SET_TYPE,
  payload: type
})

export const reset = () => ({
  type: RESET,
})
