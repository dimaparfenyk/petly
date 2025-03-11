import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3000/api/pets";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const fetchPetsData = async (endpoint = "", token = null, thunkAPI) => {
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
  async (_, thunkAPI) => fetchPetsData(_, _, thunkAPI)
  // async (_, thunkAPI) => {
  //   try {
  //     const res = await axios.get(BASE_URL);
  //     return res.data;
  //   } catch (error) {
  //     return thunkAPI.rejectWithValue(error.message);
  //   }
  // }
);

export const fetchPetsByOwner = createAsyncThunk(
  "pets/fetchPetsByOwner",
  async (token, thunkAPI) => {
    try {
      setAuthHeader(token);
      const res = await axios.get(`${BASE_URL}/own`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFavoritePets = createAsyncThunk(
  "pets/favoriteFetchPets",
  async (token, thunkAPI) => fetchPetsData("/favorite", token, thunkAPI)
);

export const toggleFavoritePet = createAsyncThunk(
  "favorites/toggle",
  async ({ token, petId }, thunkAPI) => {
    try {
      setAuthHeader(token);
      const res = await axios.put(`${BASE_URL}/${petId}/favorite`);
      return res.data.favorites;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
