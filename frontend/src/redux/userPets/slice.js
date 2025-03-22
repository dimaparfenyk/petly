import { createSlice } from "@reduxjs/toolkit";
import { addUserPet, deleteUserPet, getUserPets } from "./operations";

const handlePending = (state) => {
  state.message = null;
  state.error = null;
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const userPetsSlice = createSlice({
  name: "userPets",
  initialState: {
    myPets: [],
    isLoading: false,
    message: null,
    error: null,
  },
  reducers: {
    clearMessage: (state) => {
      state.message = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserPets.pending, handlePending)
      .addCase(getUserPets.fulfilled, (state, action) => {
        state.myPets = action.payload;
      })
      .addCase(getUserPets.rejected, handleRejected)
      .addCase(addUserPet.pending, handlePending)
      .addCase(addUserPet.fulfilled, (state, action) => {
        state.myPets.push(action.payload);
        state.message = "Pet notice successfully created";
      })
      .addCase(addUserPet.rejected, (state) => {
        state.error = "Failed to add pet!";
      })
      .addCase(deleteUserPet.pending, handlePending)
      .addCase(deleteUserPet.fulfilled, (state, action) => {
        state.myPets = state.myPets.filter(
          (pet) => pet._id !== action.payload.id
        );
        state.message = action.payload.message;
      })
      .addCase(deleteUserPet.rejected, (state) => {
        state.error = "Failed to delete pet!";
      });
  },
});

export const { clearMessage, clearError } = userPetsSlice.actions;
export const userPetsReducer = userPetsSlice.reducer;
