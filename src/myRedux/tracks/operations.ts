import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api';

export const fetchTracks = createAsyncThunk(
  'tracks/fetchTracks',
  async ({ pageIndex, pageSize }: { pageIndex: number; pageSize: number }, thunkAPI) => {
    try {
      const response = await axios.get('/tracks', { params: { page: pageIndex + 1, perPage: pageSize } });
      console.log(response.data.data);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchTrack = createAsyncThunk(
  'tracks/fetchTrack',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/tracks/${id}`);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);