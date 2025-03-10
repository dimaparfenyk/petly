import { createSlice } from "@reduxjs/toolkit";
import statusFilters from "../constants";

const filtersInitialState = {
  status: statusFilters.sell,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setStatusFilters(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
