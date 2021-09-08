const USER_FETCH_STARTED = "user/FETCH_STARTED";
const USER_FETCH_SUCCESS = "user/FETCH_SUCCESS";
const USER_FETCH_ERROR = "user/FETCH_ERROR";

export const fetchStarted = () => ({ type: USER_FETCH_STARTED });
export const fetchSuccess = (data) => ({
  type: USER_FETCH_SUCCESS,
  payload: data,
});
export const fetchError = (data) => ({ type: USER_FETCH_ERROR, payload: data });

const initialState = {
  loading: false,
  data: null,
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_FETCH_STARTED:
      return { ...state, loading: true };
    case USER_FETCH_SUCCESS:
      return { loading: false, data: action.payload, error: null };
    case USER_FETCH_ERROR:
      return { loading: false, data: null, error: action.payload };
    default:
      return state;
  }
}

export function fetchUser(url, token) {
  return async (dispatch) => {
    try {
      dispatch(fetchStarted());
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      const user = await response.json();
      dispatch(fetchSuccess(user));
    } catch (error) {
      dispatch(fetchError(error.message));
    }
  };
}

export default reducer;
