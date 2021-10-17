import { configureStore } from "@reduxjs/toolkit";
import costsReducer from "../components/costsSlice/costsSlice";

export const store = configureStore({
  reducer: {
    Costs: costsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
