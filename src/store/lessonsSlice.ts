import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Lesson {
  id: number;
  dayOfWeek: string;
  time: string;
  location: string;
  trainer: string;
}

interface LessonsState {
  lessons: Lesson[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: LessonsState = {
  lessons: [
    {
      id: 1,
      dayOfWeek: 'Понедельник',
      time: '18:00 - 19:30',
      location: 'Спортивный зал №1',
      trainer: 'Иванов Иван Иванович',
    },
    {
      id: 2,
      dayOfWeek: 'Среда',
      time: '19:00 - 20:30',
      location: 'Спортивный зал №2',
      trainer: 'Петров Петр Петрович',
    },
    {
      id: 3,
      dayOfWeek: 'Пятница',
      time: '17:00 - 18:30',
      location: 'Спортивный зал №1',
      trainer: 'Иванов Иван Иванович',
    },
  ],
  status: 'idle',
};

const lessonsSlice = createSlice({
  name: 'lessons',
  initialState,
  reducers: {
    setLessons: (state, action: PayloadAction<Lesson[]>) => {
      state.lessons = action.payload;
    },
    setStatus: (
      state,
      action: PayloadAction<'idle' | 'loading' | 'succeeded' | 'failed'>
    ) => {
      state.status = action.payload;
    },
  },
});

export const { setLessons, setStatus } = lessonsSlice.actions;
export default lessonsSlice.reducer;
