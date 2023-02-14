import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit"; // Importing from `utils` makes them more type-safe ✅
import { AppState, Song } from "../types";

// The initial state of the Homepage
export const initialState: AppState = {
  currentSong: undefined,
  isFullScreen: false,
  isMuted: false,
  playList: [],
  isPausing: false,
  searchResult: [],
};

const configSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {},
});

/**
 * `actions` will be used to trigger change in the state from where ever you want
 */
export const { actions: homepageActions } = configSlice;

export default configSlice.reducer;
