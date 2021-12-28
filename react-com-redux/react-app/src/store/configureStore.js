import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
// import { logger } from '../middleware/logger';
import contador from './contador';
import modal from './modal';
import login from './login';

const reducer = combineReducers({ contador, modal, login });

export const store = configureStore({
  reducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
