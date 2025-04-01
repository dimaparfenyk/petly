import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://petly-cvix.onrender.com/api";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkApi) => {
    try {
      const res = await axios.post("/auth/register", credentials);
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
      const res = await axios.post("/auth/login", credentials);
      if (!res.data) return;
      const { token, user } = res.data;
      setAuthHeader(token);

      return { token, user };
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    await axios.post("/auth/logout");
    clearAuthHeader();
  } catch (error) {
    thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    try {
      setAuthHeader(persistedToken);
      const res = await axios.get("/auth/current");

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeAvatar = createAsyncThunk(
  "auth/changeAvatar",
  async (file, thunkAPI) => {
    try {
      const res = await axios.patch("/auth/avatars", file, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async ({ property, value }, thunkAPI) => {
    try {
      await axios.patch("/auth/user", { [property]: value });
      return { property, value };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserDetails = createAsyncThunk(
  "auth/getUser",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/auth/user");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
