import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 10,
    name: 'hello store',
  },
  reducers: {
    increment: (state) => {
      state.value += 10;
    },
    decrement: (state) => {
      state.value -= 10;
    },
    incrementByAmount: (state, action) => {
      // neu nhu nhap la string vd: abc,..
      if (!isNaN(Number(action.payload))) {
        state.value += Number(action.payload);
      }
    },
    decrementByAmount: (state, action) => {
      if (!isNaN(Number(action.payload))) {
        state.value -= Number(action.payload);
      }
    },
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
