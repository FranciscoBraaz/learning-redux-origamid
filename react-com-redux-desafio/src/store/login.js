import { combineReducers } from '@reduxjs/toolkit';
import { getLocalStorage } from '../helper/getLocalStorage';
import { createAsyncSlice } from './createAsyncSlice';
import { removePhotosList } from './getPhotos';

const token = createAsyncSlice({
  name: 'token',
  initialState: {
    data: {
      token: getLocalStorage('token', null),
    },
  },
  reducers: {
    removeToken(state) {
      state.data = null;
    },
    fetchSuccess: {
      reducer(state, action) {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      },
      prepare(payload) {
        return {
          payload,
          meta: {
            localStorage: {
              key: 'token',
              value: payload.token,
            },
          },
        };
      },
    },
  },
  fetchConfig: (user) => ({
    url: 'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    },
  }),
});

const user = createAsyncSlice({
  name: 'user',
  reducers: {
    removeUser(state) {
      state.data = null;
    },
  },
  fetchConfig: (token) => ({
    url: 'https://dogsapi.origamid.dev/json/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  }),
});

const fetchToken = token.asyncAction;
const fetchUser = user.asyncAction;
const { removeToken } = token.actions;
const { removeUser } = user.actions;

const reducer = combineReducers({ token: token.reducer, user: user.reducer });

export const fetchLogin = (user) => async (dispatch) => {
  try {
    const { payload } = await dispatch(fetchToken(user));
    if (payload.token) {
      await dispatch(fetchUser(payload.token));
    }
  } catch {}
};

export const autoLogin = () => async (dispatch, getState) => {
  const { token } = getState().login.token.data;
  if (token) {
    await dispatch(fetchUser(token));
  }
};

export const fetchLogout = () => (dispatch) => {
  dispatch(removeToken());
  dispatch(removeUser());
  dispatch(removePhotosList());
  window.localStorage.removeItem('token');
};

export default reducer;
