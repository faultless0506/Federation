// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './news/newsSlice';
import competitionReducer from './competitions/competitionsSlice';
import sportsmansReducer from './sportsmans/sportsmansSlice';

const store = configureStore({
  reducer: {
    news: newsReducer,
    competitions: competitionReducer,
    sportsmans: sportsmansReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
    