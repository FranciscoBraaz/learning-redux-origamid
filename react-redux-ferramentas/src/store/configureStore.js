import { configureStore, combineReducers } from '@reduxjs/toolkit';
import date from './date';
import photos from './photos';

const reducer = combineReducers({ date, photos });

export const store = configureStore({ reducer });
