import { configureStore } from '@reduxjs/toolkit';
import filter from './filter';
import router from './router';

export default configureStore({
  reducer: {
    filter,
    router
  }
});
