import { configureStore } from "@reduxjs/toolkit";
import dataChartReducer from "./dataChartSlice.js";

export const store = configureStore({
    reducer: {
        dataChart: dataChartReducer,
    }
})