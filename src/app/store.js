import { configureStore } from "@reduxjs/toolkit";
import tasksReducers from "../feature/task/taskSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducers
  }
});
