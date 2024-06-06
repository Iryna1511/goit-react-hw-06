import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: { value: "" },
  reducers: {
    findContact: (state, action) => (state.value = action.payload),
  },
});

export const selectFilter = (state) => state.filter.value;
export const { findContact } = filterSlice.actions;
export default filterSlice.reducer;
