import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { localStorage } from '../middlewares/localStorage';
import login from './login';
import getPhotos from './getPhotos';

const reducer = combineReducers({ login, getPhotos });

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorage),
});

export default store;
