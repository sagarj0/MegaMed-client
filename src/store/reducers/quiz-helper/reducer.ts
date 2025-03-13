import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  started: false,
  timeCompleted: false,
  isScoreChecked: false,
  score: 0,

  startedTime: 0,
  timeTaken: 0, // in minutes
};

const slice = createSlice({
  name: "quiz/helper",
  initialState,
  reducers: {
    setStarted: (state, action: { payload: boolean }) => {
      state.startedTime = action.payload ? Date.now() : 0;
      state.started = action.payload;
    },

    setTimeCompleted: (state, action: { payload: boolean }) => {
      state.timeCompleted = action.payload;
      state.timeTaken = Date.now() - state.startedTime;
    },

    setScoreChecked: (state, action: { payload: boolean }) => {
      state.isScoreChecked = action.payload;
    },

    setScoreValue: (state, action: { payload: number }) => {
      state.score = action.payload;
      const timeTakeninMilliSeconds = Date.now() - state.startedTime;
      state.timeTaken = Math.ceil(timeTakeninMilliSeconds / 60000);
    },

    resetQuizReducer: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { setScoreValue, setStarted, setTimeCompleted, setScoreChecked, resetQuizReducer } = slice.actions;
export default slice.reducer;
