import { Song } from "./songs";

export interface AppState {
  playList: Song[];
  currentSong?: Song;
  searchResult: Song[];
  isPausing: boolean;
  isMuted: boolean;
  isFullScreen: boolean;
}

export interface RootState {
  appState?: AppState;
}
