const localStorage = (store) => (next) => (action) => {
  const result = next(action);
  if (action.localStorage !== undefined) {
    window.localStorage.setItem(action.localStorage, action.payload);
  }
  return result;
};

export default localStorage;
