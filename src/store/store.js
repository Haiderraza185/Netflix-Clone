import { configureStore } from "@reduxjs/toolkit";
import seriesReducer from "./slices/cardslices";

export const store = configureStore({
  reducer: {
    series: seriesReducer,
  },
});