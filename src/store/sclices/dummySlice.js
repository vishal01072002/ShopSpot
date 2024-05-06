import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    start: localStorage.getItem("dummy") ? 
    JSON.parse(localStorage.getItem("dummy")) : false,
}

const dummySlice = createSlice({
    name: "dummy",
    initialState: initialState,
    reducers: {
        setStart(state,value){
            state.start = value.payload
            localStorage.setItem("dummy",JSON.stringify(value.payload));
        },
    },
});

export const {setStart} = dummySlice.actions;
export default dummySlice.reducer;