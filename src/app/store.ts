import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cardSlice from './cardSlice';
export const store = configureStore({
  reducer: {
    card: cardSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
