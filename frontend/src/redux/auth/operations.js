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
      localStorage.setItem("token", res.data.token);
      setAuthHeader(res.data.token);

      return res.data.token;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
