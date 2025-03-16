// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './newsSlice';
import competitionReducer from './competitionsSlice';
import sportsmansReducer from './sportsmansSlice';
import trainersReducer from './trainersSlice';
import leadsReducer from './leadsSlice';
import clubsReducer from './clubsSlice';
import documentsReducer from './documentsSlice';
import lessonReducer from './lessonsSlice';

const store = configureStore({
  reducer: {
    news: newsReducer,
    competitions: competitionReducer,
    sportsmans: sportsmansReducer,
    trainers: trainersReducer,
    leads: leadsReducer,
    clubs: clubsReducer,
    documents: documentsReducer,
    lessons: lessonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
