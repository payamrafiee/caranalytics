import { RESET, SET_PRICE, SET_TYPE, SET_COUNTRY } from '../actionTypes'

const INITIAL_STATE = {
  price: {
    min: 0,
    max: 400000
  },
  type: {
    sedan: true,
    suv: false,
    coupe: false,
    convertible: false,
    hatchback: false,
    wagon: false,
    truck: false,
    van: false,
    minivan: false
  },
  country: {
    usa: true,
    german: true,
    japan: true,
    italy: true,
    britannia: true,
    sweden: true,
    southkorea: true,
    china: true

  }
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
      case SET_PRICE:
        return {
          ...state,
          price: action.payload
        }
      case SET_TYPE:
        return {
          ...state,
          type: {...state.type, ...action.payload}
        }
      case SET_COUNTRY:
        return {
          ...state,
          country: {...state.country, ...action.payload}
        }
      case RESET:
        return state = INITIAL_STATE
      default:
        return state
    }
}
