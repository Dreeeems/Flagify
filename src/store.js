import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "./reducer/countrySlice";
import questionReducer from "./reducer/questionSlice";

const store = configureStore({
  reducer: {
    country: countryReducer,
    question: questionReducer,
  },
});

export default store;
