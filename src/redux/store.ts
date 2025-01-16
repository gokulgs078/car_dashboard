import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice.ts";
import sidebarReducer from "./sidebarSlice.ts"
import carReducer from './carSlice.ts';
import filterReducer from './filterSlice.ts';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    sidebar: sidebarReducer,
    car: carReducer,
    filters: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
