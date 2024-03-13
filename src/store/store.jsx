import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice.jsx";
export const store = configureStore({
  reducer: {
    home: homeSlice,
  },
});
