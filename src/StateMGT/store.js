import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
axios.defaults.baseURL = "http://localhost:3031";
export default configureStore({
  reducer: {
    todo: todoReducer,
  },
});
