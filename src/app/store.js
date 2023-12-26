import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./features/slice/dataSlice";

export const store = configureStore({
    reducer: dataSlice
})