import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];

const CountersSlice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    increment: (state, action) => {
      const counterIndex = state.findIndex((c) => c.id === action.payload);
      state[counterIndex].value++;
    },

    decrement: (state, action) => {
      const counterIndex = state.findIndex((c) => c.id === action.payload);
      {
        state[counterIndex].value > 0 && state[counterIndex].value--;
      }
    },
  },
});

export default CountersSlice.reducer;
export const { increment, decrement } = CountersSlice.actions;
