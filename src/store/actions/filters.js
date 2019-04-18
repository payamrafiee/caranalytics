import { RESET, SET_PRICE, SET_TYPE, SET_COUNTRY } from '../actionTypes';

export const setPrice = (value) => ({
  type: SET_PRICE,
  payload: value
})

export const setType = (type) => ({
  type: SET_TYPE,
  payload: type
})

export const setCountry = (country) => ({
  type: SET_COUNTRY,
  payload: country
})

export const reset = () => ({
  type: RESET,
})
