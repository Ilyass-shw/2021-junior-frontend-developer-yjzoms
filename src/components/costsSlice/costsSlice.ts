import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { apiItem, costsState } from './types';

import { addItemReducer } from './reducers/addItemReducer';
import getCostsFulfilledReducer from './reducers/getCostsFulfilledReducer';
import getCostsPendingReducer from './reducers/getCostsPendingReducer';
import getCostsRejectedReducer from './reducers/getCostsRejectedReducer';

export const getCosts = createAsyncThunk<{ items: apiItem[] }>(
  'costs/getCostsData',
  async () => {
    const response = await fetch(
      'https://dl5mns5bwg.execute-api.eu-central-1.amazonaws.com/prod',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await response.json();
    return data;
  },
);

export const initialState: costsState = {
  costsList: [],
  numberOfItems: 0,
  FetchStatus: 'idle',
  totalSum: 0,
  average: 0,
};

export const costsSlice = createSlice({
  name: 'costs',
  initialState,
  reducers: {
    addCostItem: addItemReducer,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCosts.pending, getCostsPendingReducer)
      .addCase(getCosts.fulfilled, getCostsFulfilledReducer)
      .addCase(getCosts.rejected, getCostsRejectedReducer);
  },
});

export const { addCostItem } = costsSlice.actions;

export default costsSlice.reducer;
