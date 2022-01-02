function reducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENTAR':
      return state + 1;
    case 'REDUZIR':
      return state - 1;
    default:
      return state;
  }
}

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log('Previous state: ', store.getState());
  const result = next(action);
  console.log('New state: ', store.getState());
  console.groupEnd();
  return result;
};

const alertMiddleware = (store) => (next) => (action) => {
  if (action.type === 'REDUZIR') {
    // alert("Essa é uma ação de reduzir");
  }
  return next(action);
};

const { applyMiddleware, compose } = Redux;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(logger, alertMiddleware));

const store = Redux.createStore(reducer, enhancer);

store.dispatch({ type: 'INCREMENTAR' });
store.dispatch({ type: 'INCREMENTAR' });
store.dispatch({ type: 'REDUZIR' });
store.dispatch({ type: 'INCREMENTAR' });
