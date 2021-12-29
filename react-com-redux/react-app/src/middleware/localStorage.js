export const localStorage = (store) => (next) => (action) => {
  const { meta } = action;
  const result = next(action);
  if (meta && meta.localStorage) {
    const { key, value } = meta.localStorage;
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  return result;
};
