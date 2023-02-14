import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { AppState, Song } from "../types";

interface Actions {
  updatePlayList: (newValue: AppState["playList"]) => void;
  updatesSearchResult: (newValue: AppState["searchResult"]) => void;
  updateCurrentSong: (newValue: AppState["currentSong"]) => void;
  updateIsFullScreen: () => void;
  updateIsMuted: () => void;
  updateIsPausing: () => void;
}

const useAppStore = create<AppState & Actions>()(
  devtools(
    persist(
      (set, get) => ({
        playList: [],
        searchResult: [],
        isFullScreen: false,
        isMuted: false,
        isPausing: false,
        updateCurrentSong: (currentSong) => set(() => ({ currentSong })),
        updatePlayList: (playList) => set(() => ({ playList })),
        updateIsFullScreen: () =>
          set(() => ({ isFullScreen: !get().isFullScreen })),
        updateIsMuted: () => set(() => ({ isMuted: !get().isMuted })),
        updateIsPausing: () => set(() => ({ isPausing: !get().isPausing })),
        updatesSearchResult: (searchResult) => set(() => ({ searchResult })),
      }),
      {
        name: "appStore",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export default useAppStore;
