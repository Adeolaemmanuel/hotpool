// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

export const getAllTransaction = createAsyncThunk(
  "appUsers/getAllData",
  async () => {
    const response = await axios.get("/transactions/", {
      baseURL: process.env.REACT_APP_API,
    });
    return response.data.ResponseData;
  }
);

export const transactionsSlice = createSlice({
  name: "transaction",
  initialState: {
    data: [],
    total: 9,
    page: 0,
    successful: 0,
    not_successful: 0,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTransaction.fulfilled, (state, action) => {
      state.data = action.payload.data;
      (state.total = action.payload.total),
        (state.page = action.payload.page),
        (state.successful = action.payload.successful);
      state.not_successful = action.payload.not_successful;
      state.loading = action.payload.loading;
    });
  },
});

export default transactionsSlice.reducer;
