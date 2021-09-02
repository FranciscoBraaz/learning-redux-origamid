// Constant
const INCREMENTAR = "INCREMENTAR";
const REDUZIR = "REDUZIR";

//Action creator
export const incrementar = () => ({ type: INCREMENTAR });
export const reduzir = () => ({ type: REDUZIR });

//Initial state
const initialState = 0;

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENTAR:
      return state + 1;
    case REDUZIR:
      return state - 1;
    default:
      return state;
  }
}

export default reducer;
