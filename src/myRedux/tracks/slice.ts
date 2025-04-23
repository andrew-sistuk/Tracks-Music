import { createSlice } from '@reduxjs/toolkit';
import { fetchTrack, fetchTracks } from './operations';
import { Item } from '@/types';

export interface TrackState {
  items: Item[];
  item: Item,
  pageIndex: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  loading: boolean;
  error: any,
}

const initialState: TrackState = {
  items: [],
  item: {},
  pageIndex: 0,
  pageSize: 10,
  totalItems: 0,
  totalPages: 0,
  loading: false,
  error: null,
};

const defaultProperties = (state: any) => {
  state.items = [];
  state.item = {};
  state.totalPages = 0;
};

const handlePending = (state: any) => {
  state.loading = true;
  defaultProperties(state);
};

const handleRejected = (state: any, action: any) => {
  state.error = action.payload;
  state.loading = false;
  defaultProperties(state);
};

const tracksSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    setPagination: (state, action) => {
      state.pageIndex = action.payload.pageIndex;
      state.pageSize = action.payload.pageSize;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTracks.pending, handlePending)
      .addCase(fetchTracks.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload.data;
        state.totalItems = action.payload.meta.total;
        state.totalPages = action.payload.meta.totalPages;
      })
      .addCase(fetchTracks.rejected, handleRejected)

      .addCase(fetchTrack.pending, handlePending)
      .addCase(fetchTrack.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.item = action.payload.item;
      })
      .addCase(fetchTrack.rejected, handleRejected);
  },
});

export const { setPagination } = tracksSlice.actions;
export default tracksSlice.reducer;