export const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log('PREV_STATE', store.getState());
  const result = next(action);
  console.log('NEXT_STATE', store.getState());
  console.groupEnd();
  return result;
};
