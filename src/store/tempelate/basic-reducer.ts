import { createSlice } from "@reduxjs/toolkit";

export const createBasicReducer = (name: string) => {
  const initialState = {
    isLoading: false,
    success: null,
    error: null,
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
      setSuccess(state, action) {
        state.success = action.payload;
      },
      resetSuccess(state) {
        state.success = null;
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
