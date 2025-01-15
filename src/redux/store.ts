import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice.ts";
import sidebarReducer from "./sidebarSlice.ts"

const store = configureStore({
  reducer: {
    theme: themeReducer,
    sidebar: sidebarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
