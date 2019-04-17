import { combineReducers } from 'redux'
import dataset from './dataset';
import filters from './filters';

export default combineReducers({
  dataset,
  filters,
})
