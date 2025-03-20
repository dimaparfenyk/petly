import { createSlice } from "@reduxjs/toolkit";
import {
  addPet,
  fetchAllPets,
  fetchFavoritePets,
  fetchPetsByOwner,
  toggleFavoritePet,
} from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const petsSlice = createSlice({
  name: "pets",
  initialState: {
    items: [],
    favorites: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      // fetching all pets
      .addCase(fetchAllPets.pending, handlePending)
      .addCase(fetchAllPets.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllPets.rejected, handleRejected)
      // fetching pets by owner
      .addCase(fetchPetsByOwner.pending, handlePending)
      .addCase(fetchPetsByOwner.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchPetsByOwner.rejected, handleRejected)
      // toggle favorite pets
      .addCase(toggleFavoritePet.fulfilled, (state, action) => {
        const petId = action.payload.petId;
        // toggle pets in favorites
        if (state.favorites.some((pet) => pet._id === petId)) {
          state.favorites = state.favorites.filter((pet) => pet._id !== petId);
        } else {
          state.favorites.push(action.payload.pet);
        }
      })
      .addCase(toggleFavoritePet.rejected, (state, action) => {
        state.error = action.payload;
      })
      // fetch favorite pets
      .addCase(fetchFavoritePets.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      .addCase(addPet.fulfilled, (state, action) => {
        console.log(action.payload);
        state.items.push(action.payload.result);
      })
      .addCase(addPet.rejected, (state, action) => {
        console.log(action.payload);
        state.error = action.payload;
      });
  },
});

export const petsReducer = petsSlice.reducer;
