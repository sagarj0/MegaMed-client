import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFullScreen: false,
};

const slice = createSlice({
  name: "full-screen",
  initialState,
  reducers: {
    setFullScreen: (state, action: { payload: boolean }) => {
      state.isFullScreen = action.payload;
    },
  },
});

export const { setFullScreen } = slice.actions;
export default slice.reducer;
