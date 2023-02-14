import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import configSlice from "./configSlice";

export const store = configureStore({
  reducer: {
    config: configSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
