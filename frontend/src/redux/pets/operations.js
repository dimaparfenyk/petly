import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3000/api/pets";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const fetchPetsData = async (endpoint, token, thunkAPI) => {
  try {
    setAuthHeader(token);
    const res = await axios.get(`${BASE_URL}/${endpoint}`);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};

export const fetchAllPets = createAsyncThunk(
  "pets/fetchAllPets",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(BASE_URL);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchPetsByOwner = createAsyncThunk(
  "pets/fetchPetsByOwner",
  async (token, thunkAPI) => fetchPetsData("own", token, thunkAPI)
);

export const fetchPetsByFavorite = createAsyncThunk(
  "pets/fetchPetsByFavorite",
  async (token, thunkAPI) => fetchPetsData("favorites", token, thunkAPI)
);
