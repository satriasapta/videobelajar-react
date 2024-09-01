import { configureStore } from "@reduxjs/toolkit";
import database from "./database";

const store = configureStore({
    reducer: {
        course: database,
    },
});

console.log("oncreate store: ", store.getState());

store.subscribe(() => {
    console.log("Store Change: ", store.getState());
});

export default store;