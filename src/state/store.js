import { configureStore } from '@reduxjs/toolkit';
import { filterReducer, routerReducer } from './ducks';

export default configureStore({
  reducer: {
    filter: filterReducer,
    router: routerReducer
  }
});
