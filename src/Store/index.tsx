import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./rootReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
