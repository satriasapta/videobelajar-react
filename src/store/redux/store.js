import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./slices/courseSlice";

const store = configureStore({
    reducer: {
        course: courseReducer,
    },
});

console.log("oncreate store: ", store.getState());

store.subscribe(() => {
    console.log("Store Change: ", store.getState());
});

export default store;