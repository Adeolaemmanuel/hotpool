// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

export const getAllTransaction = createAsyncThunk("appUsers/getAllData", async () => {
  const response = await axios.get("/transactions/", {
    baseURL: process.env.REACT_APP_API,
  });
  return response.data.ResponseData;
});

export const transactionsSlice = createSlice({
  name: "transaction",
  initialState: {
    data: [],
    total: 9,
    page: 0
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTransaction.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.total = action.payload.total,
        state.page = action.payload.page
      })
  },
});

export default transactionsSlice.reducer;
