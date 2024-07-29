import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../../services/api/firebase";

export const fetchCourses = createAsyncThunk("course/fetchCourses", async () => {
    const querySnapshot = await getDocs(collection(db, "kursus"));
    let courses = [];
    querySnapshot.forEach((doc) => {
        courses.push({ id: doc.id, ...doc.data() });
    });
    return courses;
});

export const updateCourseInFirebase = createAsyncThunk("course/updateCourseInFirebase", async (course) => {
    const courseRef = doc(db, "kursus", course.id);
    await updateDoc(courseRef, course);
    return course;
});

export const deleteCourseInFirebase = createAsyncThunk("course/deleteCourseInFirebase", async (courseId) => {
    const courseRef = doc(db, "kursus", courseId);
    await deleteDoc(courseRef);
    return courseId;
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
        updateCourse: (state, action) => {
            const index = state.data.findIndex(course => course.id === action.payload.id);
            if (index !== -1) {
                state.data[index] = action.payload;
            }
        },
        removeCourse: (state, action) => {
            state.data = state.data.filter(course => course.id !== action.payload);
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
            })
            .addCase(updateCourseInFirebase.fulfilled, (state, action) => {
                const index = state.data.findIndex(course => course.id === action.payload.id);
                if (index !== -1) {
                    state.data[index] = action.payload;
                }
            })
            .addCase(deleteCourseInFirebase.fulfilled, (state, action) => {
                state.data = state.data.filter(course => course.id !== action.payload);
            });
    },
});

export const { addCourse, updateCourse, removeCourse } = courseSlice.actions;

export default courseSlice.reducer;
