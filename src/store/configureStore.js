import { createStore, combineReducers } from 'redux';
import citationsReducer from '../reducers/citations';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      citations: citationsReducer,
      filters: filtersReducer
    })
  );
  return store;
}