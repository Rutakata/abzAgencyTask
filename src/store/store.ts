import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersReducer";
import formReducer from "./formReducer";

const rootReducer = combineReducers({usersReducer, formReducer});

export const store = configureStore({reducer: rootReducer});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;