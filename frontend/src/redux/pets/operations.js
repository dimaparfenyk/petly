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
  "pets/fetchFavoritePets",
  async (token, thunkAPI) => fetchPetsData("/favorite", token, thunkAPI)
);

export const addPet = createAsyncThunk(
  "pets/addPet",
  async (data, thunkAPI) => {
    try {
      const res = await axios.post(BASE_URL, data);
      console.log(res.data.result);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleFavoritePet = createAsyncThunk(
  "favorites/toggle",
  async ({ token, petId }, thunkAPI) => {
    try {
      setAuthHeader(token);
      const res = await axios.put(`${BASE_URL}/favorite/${petId}`);
      return { petId, pet: res.data.pet };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
