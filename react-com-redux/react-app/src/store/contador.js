import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'contador',
  initialState: 0,
  reducers: {
    incrementar: {
      reducer: (state) => state + 1,
      prepare(payload) {
        return { payload, meta: 'localIncrementar' };
      },
    },
    reduzir: {
      reducer: (state) => state - 1,
      prepare(payload) {
        return { payload, meta: 'localReduzir' };
      },
    },
  },
});

export const { incrementar, reduzir } = slice.actions;
export default slice.reducer;
