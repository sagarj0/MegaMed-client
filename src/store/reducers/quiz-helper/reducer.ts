import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  started: false,
  timeCompleted: false,
  isScoreChecked: false,
  score: 0,

  openModal: false,

  startedTime: 0,
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
    },

    setScoreChecked: (state, action: { payload: boolean }) => {
      state.isScoreChecked = action.payload;
    },

    setOpenModal: (state, action: { payload: boolean }) => {
      state.openModal = action.payload;
    },

    setScoreValue: (state, action: { payload: number }) => {
      state.score = action.payload;
    },

    resetQuizReducer: (state) => {
      state.started = false;
      state.timeCompleted = false;
      state.isScoreChecked = false;
      state.startedTime = 0;
      state.score = 0;
      state.openModal = false;
    },
  },
});

export const { setScoreValue, setStarted, setTimeCompleted, setScoreChecked, resetQuizReducer, setOpenModal } = slice.actions;
export default slice.reducer;
