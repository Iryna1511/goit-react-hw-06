import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filterReucer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReucer,
  },
});
