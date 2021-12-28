import { combineReducers } from '@reduxjs/toolkit';
import createAsyncSlice from './createAsyncSlice';

const token = createAsyncSlice({
  name: 'token',
  fetchConfig: (payload) => ({
    url: 'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    },
  }),
});

const user = createAsyncSlice({
  name: 'user',
  fetchConfig: (payload) => ({
    url: 'https://dogsapi.origamid.dev/json/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + payload,
      },
    },
  }),
});

const fetchToken = token.asyncAction;
const fetchUser = user.asyncAction;
const tokenReducer = token.reducer;
const userReducer = user.reducer;

const reducer = combineReducers({ token: tokenReducer, user: userReducer });
export default reducer;

export const fetchLogin = (user) => async (dispatch) => {
  try {
    const { payload } = await dispatch(fetchToken(user));
    if (payload.token) {
      await dispatch(fetchUser(payload.token));
    }
  } catch (error) {}
};
