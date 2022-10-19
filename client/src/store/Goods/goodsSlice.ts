import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGoodsState } from "../types/goodsSliceTypes";

const initialState: IGoodsState = {
    goods: [],
    loading: false
}


export const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    reducers: {
    }
})

export const { } = goodsSlice.actions;
export default goodsSlice.reducer; 