import { createSlice } from "@reduxjs/toolkit";
import { User } from "../login/type";

type AuthRepoType = {
  accessToken: string | null;
  refreshToken: string | null;
  user: User;
};

const initialState: AuthRepoType = {
  accessToken: null,
  refreshToken: null,
  user: {
    id: "",
    name: "",
    email: "",
    pictureUrl: "",
    active: false,
    isPaidUser: false,
    role: "student",
    googleId: "",
  },
};

const authSlice = createSlice({
  name: "auth/repo",
  initialState,
  reducers: {
    changeAccessToken(state, action) {
      state.accessToken = action.payload;
    },
    changeRefreshToken(state, action) {
      state.refreshToken = action.payload;
    },
    changeUser(state, action) {
      state.user = action.payload;
    },
    resetState(state) {
      state.accessToken = null;
      state.refreshToken = null;
      state.user = initialState.user;
    },
  },
});

export const { changeAccessToken, changeRefreshToken, changeUser, resetState } = authSlice.actions;
export default authSlice.reducer;
