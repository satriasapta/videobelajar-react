import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../services/api/firebase";

export const fetchCourses = createAsyncThunk("course/fetchCourses", async () => {
    const querySnapshot = await getDocs(collection(db, "kursus"));
    let courses = [];
    querySnapshot.forEach((doc) => {
        courses.push({ id: doc.id, ...doc.data() });
    });
    return courses;
});

const courseSlice = createSlice({
    name: "course",
    initialState: {
        data: [],
        status: "idle",
        error: null,
    },
    reducers: {
        addCourse: (state, action) => {
            state.data.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCourses.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCourses.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload;
            })
            .addCase(fetchCourses.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { addCourse } = courseSlice.actions;

export default courseSlice.reducer;