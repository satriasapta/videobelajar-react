import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";

const addCourse = createAction("ADD_COURSE");

const courseReducer = createReducer([], (builder) => {
    builder.addCase(addCourse, (state, action) => {
        state.push(action.payload)
    })
})

const store = configureStore({
    reducer: {
        course: courseReducer
    }
})

console.log("one create store: ", store.getState());

store.subscribe(() => {
    console.log("STORE CHANGE ", store.getState());
})

const action1 = addCourse({ id: 1, title: "Course 1" });
store.dispatch(action1);



