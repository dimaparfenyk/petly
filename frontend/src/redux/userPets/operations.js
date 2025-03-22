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

export const addUserPet = createAsyncThunk(
  "userPets/addPet",
  async (data, thunkApi) => {
    try {
      const res = await axios.post("/user/homepets", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return res.data;
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

      return { message: data.message, id };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
