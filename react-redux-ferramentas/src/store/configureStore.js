import { configureStore, combineReducers } from '@reduxjs/toolkit';
import date from './date';
import photos from './photos';
import products from './products';

const reducer = combineReducers({ date, photos, products });

export const store = configureStore({ reducer });
