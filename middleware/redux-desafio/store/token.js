import { getTokenLocalStorage } from "../helper/getTokenLocalStorage.js";

const TOKEN_FETCH_STARTED = "token/FETCH_STARTED";
const TOKEN_FETCH_SUCCESS = "token/FETCH_SUCCESS";
const TOKEN_FETCH_ERROR = "token/FETCH_ERROR";

export const fetchStarted = () => ({ type: TOKEN_FETCH_STARTED });
export const fetchSuccess = (data, key) => ({
  type: TOKEN_FETCH_SUCCESS,
  payload: data,
  localStorage: key,
});

export const fetchError = (error) => ({
  type: TOKEN_FETCH_ERROR,
  payload: error,
});

const initialState = {
  loading: false,
  data: getTokenLocalStorage("token", null),
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case TOKEN_FETCH_STARTED:
      return { ...state, loading: true };
    case TOKEN_FETCH_SUCCESS:
      return { loading: true, data: action.payload, error: null };
    case TOKEN_FETCH_ERROR:
      return { loading: true, data: null, error: action.payload };
    default:
      return state;
  }
}

export function fetchToken(url) {
  const user = { username: "dog", password: "dog" };
  return async (dispatch) => {
    try {
      dispatch(fetchStarted());
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const { token } = await response.json();
      dispatch(fetchSuccess(token, "token"));
    } catch (error) {
      dispatch(fetchError(error.message));
    }
  };
}

export default reducer;
