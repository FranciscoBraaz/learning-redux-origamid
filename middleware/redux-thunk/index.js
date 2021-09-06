const initialState = {
  loading: false,
  data: null,
  error: null
}

function reducer(state = initialState, action) {
  console.log("Reducer")
  switch (action.type) {
    case "FETCH_STARTED":
      return {...state, loading: true};
    case "FETCH_SUCCESS":
      return {loading: false, data: action.payload, error:null};
    case "FETCH_ERROR":
      return {loading: false, data:null, error: action.payload}
    default:
      return state;
  }
}

const thunk = (store) => (next) => (action) => {
  console.log("Thunk")
  if(typeof action === 'function') {
    console.log("Thunk - é uma função")
    return action(store.dispatch);
  }

  return next(action);
}

const { applyMiddleware, compose } = Redux;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = Redux.createStore(reducer, enhancer);

function fetchUrl(url) {
  console.log("Função fetchUrl")
  return async (dispatch) => {
    console.log("Função anônima async")
    try {
      dispatch({type: "FETCH_STARTED"})
      const data = await fetch(url).then((response) => response.json())
      dispatch({type: "FETCH_SUCCESS", payload: data})
    } catch(error) {
      dispatch({type: "FETCH_ERROR", payload: error.message})
    }
  }
}


store.dispatch(fetchUrl('https://dogsapi.origamid.dev/json/api/photo'))


