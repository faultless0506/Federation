import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Lesson {
  id: string;
  trainer: string;
  location: string;
  day: string;
  time: string;
}

interface LessonsState {
  lessons: Lesson[];
}

const initialState: LessonsState = {
  lessons: [
    {
      id: '1',
      trainer: 'Иванов А.П.',
      location: 'Сокольники',
      day: 'Пн',
      time: '10:00',
    },
    {
      id: '2',
      trainer: 'Петров В.С.',
      location: 'Сокольники',
      day: 'Пн',
      time: '15:00',
    },
    {
      id: '3',
      trainer: 'Сидоров К.Л.',
      location: 'Сокольники',
      day: 'Вт',
      time: '11:00',
    },
    {
      id: '4',
      trainer: 'Иванов А.П.',
      location: 'Сокольники',
      day: 'Ср',
      time: '10:00',
    },
    {
      id: '5',
      trainer: 'Петров В.С.',
      location: 'Сокольники',
      day: 'Чт',
      time: '15:00',
    },
    {
      id: '6',
      trainer: 'Сидоров К.Л.',
      location: 'Сокольники',
      day: 'Пт',
      time: '17:00',
    },
    {
      id: '7',
      trainer: 'Иванов А.П.',
      location: 'Сокольники',
      day: 'Сб',
      time: '12:00-13:00, 15:00-17:00, 17:00-18:00',
    },
    {
      id: '8',
      trainer: 'Петров В.С.',
      location: 'Сокольники',
      day: 'Вс',
      time: '10:00',
    },
    {
      id: '9',
      trainer: 'Боширов В.С.',
      location: 'Сокольники',
      day: 'Вс',
      time: '10:00',
    },
  ],
};

const lessonsSlice = createSlice({
  name: 'lessons',
  initialState,
  reducers: {
    addLesson: (state, action: PayloadAction<Lesson>) => {
      state.lessons.push(action.payload);
    },
    removeLesson: (state, action: PayloadAction<string>) => {
      state.lessons = state.lessons.filter(
        (lesson) => lesson.id !== action.payload
      );
    },
    updateLesson: (state, action: PayloadAction<Lesson>) => {
      const index = state.lessons.findIndex(
        (lesson) => lesson.id === action.payload.id
      );
      if (index !== -1) {
        state.lessons[index] = action.payload;
      }
    },
  },
});

export const { addLesson, removeLesson, updateLesson } = lessonsSlice.actions;
export default lessonsSlice.reducer;
