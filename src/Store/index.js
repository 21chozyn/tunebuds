import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../Slices/UI/uiSlice";
export default configureStore({
  reducer: { ui: uiReducer },
});
