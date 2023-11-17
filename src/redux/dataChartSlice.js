// dataChartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chartData: [
    { name: '00:00' },
    { name: '02:00' },
    { name: '04:00' },
    { name: '06:00' },
    { name: '08:00' },
    { name: '10:00' },
    { name: '12:00' },
    { name: '14:00' },
    { name: '16:00' },
    { name: '18:00' },
    { name: '20:00' },
    { name: '22:00' },
  ],
};

export const dataChartSlice = createSlice({
  name: "dataChart",
  initialState,
  reducers: {
    addData: (state, action) => {
      const { hora, temperatura } = action.payload;

      // Actualiza los datos según la hora y temperatura recibidos
      const newDataArray = state.chartData.map((item) => {
        if (item.name === hora) {
          return { name: hora, C: temperatura };
        }
        return item;
      });

      // Actualiza el estado con los nuevos datos
      state.chartData = newDataArray;
    },
  },
});

export const { addData } = dataChartSlice.actions;
export default dataChartSlice.reducer;
