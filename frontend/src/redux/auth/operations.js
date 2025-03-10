import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:3000/api/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkApi) => {
    try {
      const res = await axios.post("auth/register", credentials);
<<<<<<< HEAD

=======
>>>>>>> 77a771230dd04676a1739f02f850a47d4e4737ec
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const res = await axios.post("auth/login", credentials);
<<<<<<< HEAD
      localStorage.setItem("token", res.data.token);
      setAuthHeader(res.data.token);

=======
      setAuthHeader(res.data.token);
>>>>>>> 77a771230dd04676a1739f02f850a47d4e4737ec
      return res.data.token;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
<<<<<<< HEAD
=======

// export const logIn = createAsyncThunk(
//     'auth/login',
//     async (credentials, thunkAPI) => {
//       try {
//         const res = await axios.post('/users/login', credentials);
//         // After successful login, add the token to the HTTP header
//         // setAuthHeader(res.data.token);
//         return res.data;
//       } catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//       }
//     }
//   );
>>>>>>> 77a771230dd04676a1739f02f850a47d4e4737ec
