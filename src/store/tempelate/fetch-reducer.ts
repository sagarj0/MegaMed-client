import { createSlice } from "@reduxjs/toolkit";

export const createFetchReducer = <T>(name: string, data: T) => {
  const initialState = {
    isLoading: false,
    error: null,
    data: data,
  };

  const slice = createSlice({
    name: name,
    initialState,
    reducers: {
      setLoading: (state) => {
        state.isLoading = true;
      },
      resetLoading: (state) => {
        state.isLoading = false;
      },
      setData(state, action) {
        state.data = action.payload;
      },
      setError(state, action) {
        state.error = action.payload;
      },
      resetError(state) {
        state.error = null;
      },
    },
  });

  return slice;
};
