import { createSlice } from "@reduxjs/toolkit";
import { deleteUserPet, getUserPets } from "./operations";

const initialState = {
  myPets: [],
  message: "",
};

const userPetsSlice = createSlice({
  name: "userPets",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUserPets.fulfilled, (state, action) => {
        state.myPets = action.payload;
      })
      .addCase(deleteUserPet.fulfilled, (state, action) => {
        state.myPets = state.myPets.filter(
          (pet) => pet._id !== action.payload.id
        );

        state.message = action.payload.message;
      });
  },
});

export const userPetsReducer = userPetsSlice.reducer;
