import {configureStore} from "@reduxjs/toolkit";
import {camperReducer} from "./slices/camperSlice";


const store = configureStore({
    reducer:{
        campers:camperReducer
    }
});


export {store}