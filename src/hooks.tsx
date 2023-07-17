import React from 'react';
import { store } from './store';


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// MODULE 5
// CREATE REDUX TO SHARE THE USER IN ALL COMPONENTS
