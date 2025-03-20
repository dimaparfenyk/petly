import { createSlice } from "@reduxjs/toolkit";
import {
  register,
  login,
  logOut,
  refreshUser,
  changeAvatar,
  updateUser,
  getUserDetails,
} from "./operations";

const initialState = {
  user: { name: null, email: null, phone: null },
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
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isRefreshing = false;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = {
          ...state.user,
          [action.payload.property]: action.payload.value,
        };
      })
      .addCase(changeAvatar.fulfilled, (state, action) => {
        state.user.avatarURL = action.payload.avatarURL;
      });
  },
});

export const authReducer = authSlice.reducer;
