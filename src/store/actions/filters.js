import { SET_FILTERS, RESET, SET_PRICE, SET_TYPE } from '../actionTypes';
// import data from './carsInfo.json';
import _ from 'lodash';

// const applyFilters = (filters) => {
//   const {price} = filters
//   const numberOfCars = []

//   const collections = _.filter(data, function(o) {
//     if (o.price_start >= price.min && o.price_start <= price.max) return o;
//   });

//   const listOfLabels = [...new Set(collections.map(car => car.make))]

//   for(let i in listOfLabels) {
//     numberOfCars.push(_.filter(collections, function(o) {
//       if(o.make === listOfLabels[i]) {
//         return o
//       }
//     }).length)
//   }
//   return {
//     collections,
//     listOfLabels,
//     numberOfCars
//   }
// }

// export const setFilters = (filters) => async dispatch => {
//   dispatch({
//     type: SET_FILTERS,
//     payload: applyFilters(filters)
//   })
// }

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
