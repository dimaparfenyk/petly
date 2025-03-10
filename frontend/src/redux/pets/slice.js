import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllPets,
  fetchPetsByOwner,
  fetchPetsByFavorite,
} from "./operations";

const petsSlice = createSlice({
  name: "pets",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllPets.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllPets.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchPetsByOwner.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchPetsByFavorite.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPetsByFavorite.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchPetsByFavorite.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const petsReducer = petsSlice.reducer;
