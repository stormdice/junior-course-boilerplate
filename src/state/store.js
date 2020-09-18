import { createStore, combineReducers } from 'redux';
import filter from './ducks/filter';
import router from './ducks/router';

const appReducer = combineReducers({ filter, router });

const configureStore = () => {
  return createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};

export default configureStore;
