import { createSlice} from "@reduxjs/toolkit";
import seriesData from "../../api/SeriesData.json";

const seriesSlice = createSlice({
    name : "series",
    initialState : {
        list : seriesData,
    },
    reducers : {}
})

export const { addSeries, removeSeries, updateSeries } = seriesSlice.actions;
export default seriesSlice.reducer;