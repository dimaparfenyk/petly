import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllPets,
  fetchPetsByOwner,
  // fetchPetsByFavorite,
  toggleFavoritePet,
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
      .addCase(fetchPetsByOwner.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPetsByOwner.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchPetsByOwner.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(toggleFavoritePet.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      .addCase(toggleFavoritePet.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const petsReducer = petsSlice.reducer;
