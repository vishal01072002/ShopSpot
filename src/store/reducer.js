import {combineReducers} from "@reduxjs/toolkit"
import dummySlice from "./sclices/dummySlice"

const rootReducer = combineReducers({
    dummy : dummySlice,
});

export default rootReducer;