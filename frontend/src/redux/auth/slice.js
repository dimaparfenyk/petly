import { createSlice } from "@reduxjs/toolkit";
import { register, login } from "./operations";

const initialState = {
<<<<<<< HEAD
  // user: { name: null, email: null },
=======
  user: { name: null, email: null },
>>>>>>> 77a771230dd04676a1739f02f850a47d4e4737ec
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(login.fulfilled, (state, action) => {
<<<<<<< HEAD
        state.token = action.payload;
=======
        state.user = action.payload.user;
        state.token = action.payload.token;
>>>>>>> 77a771230dd04676a1739f02f850a47d4e4737ec
        state.isLoggedIn = true;
      });
  },
});

export const authReducer = authSlice.reducer;
