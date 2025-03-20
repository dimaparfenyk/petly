import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserPets = createAsyncThunk(
  "userPets/getPets",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("/user/homepets");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteUserPet = createAsyncThunk(
  "userPets/deletePet",
  async (id, thunkApi) => {
    try {
      const { data } = await axios.delete(`/user/homepets/${id}`);

      return { message: data.message };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
