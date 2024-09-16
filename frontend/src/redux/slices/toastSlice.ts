import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ToastInitialState = {
    isToastComponentActive: false
};

const toastSlice = createSlice({
    name: "toastInfo",
    initialState,
    reducers: {
        setToastActive: (state,action:PayloadAction<boolean>) => {
            state.isToastComponentActive = action.payload;
        }
    }

})
export const { setToastActive } = toastSlice.actions;
export default toastSlice.reducer