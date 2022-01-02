import { createSlice } from '@reduxjs/toolkit';
import { data } from '../data';

const slice = createSlice({
  name: 'produto',
  initialState: {
    data,
    filters: {
      colors: [],
      prices: {
        max: 0,
        min: 0,
      },
    },
  },
  reducers: {
    changeFilters(state, action) {
      state.filters[action.payload.name] = action.payload.value;
    },
  },
});

export function getUniqueColors(state) {
  return Array.from(
    new Set(state.products.data.map((product) => product.color)),
  );
}

export const { changeFilters } = slice.actions;
export default slice.reducer;
