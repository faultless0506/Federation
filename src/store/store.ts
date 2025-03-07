// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './news/newsSlice';
import competitionReducer from './competitions/competitionsSlice';
import sportsmansReducer from './sportsmans/sportsmansSlice';
import trainersReducer from './trainers/trainersSlice';
import leadsReducer from './lead/leadsSlice';
import clubsReducer from './clubs/clubsSlice';

const store = configureStore({
  reducer: {
    news: newsReducer,
    competitions: competitionReducer,
    sportsmans: sportsmansReducer,
    trainers: trainersReducer,
    leads: leadsReducer,
    clubs: clubsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
    