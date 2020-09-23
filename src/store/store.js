import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filter';
import routerReducer from './router';

export default configureStore({
  reducer: {
    filter: filterReducer,
    router: routerReducer
  }
});
