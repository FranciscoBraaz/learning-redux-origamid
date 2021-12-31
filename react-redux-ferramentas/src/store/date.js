import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'date',
  initialState: {
    departure: '',
    returnDate: '',
  },
  reducers: {
    addDate(state, action) {
      state.departure = action.payload.departure;
      state.returnDate = action.payload.returnDate;
    },
  },
});

export const { addDate } = slice.actions;
export default slice.reducer;
