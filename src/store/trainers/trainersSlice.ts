import { createSlice } from "@reduxjs/toolkit";
import photoGarold from "../../assets/img/434.jpeg";

interface TrainersState {
  items: {
    id: number;
    name: string;
    rank: number;
    photo: string;
  }[];
}

const initialState: TrainersState = {
  items: [
    {
      id: 1,
      name: "Иван Иванов",
      rank: 2,
      photo: photoGarold,
    },
    {
      id: 2,
      name: "Мария Петрова",
      rank: 1,
      photo: photoGarold,
    },
    {
      id: 3,
      name: "Алексей Сидоров",
      rank: 3,
      photo: photoGarold,
    },
    {
      id: 4,
      name: "Елена Кузнецова",
      rank: 2,
      photo: photoGarold,
    },
    {
      id: 5,
      name: "Дмитрий Смирнов",
      rank: 1,
      photo: photoGarold,
    },
    {
      id: 6,
      name: "Ольга Васильева",
      rank: 2,
      photo: photoGarold,
    },
    {
      id: 7,
      name: "Андрей Кузьмин",
      rank: 3,
      photo: photoGarold,
    },
    {
      id: 8,
      name: "Юлия Захарова",
      rank: 2,
      photo: photoGarold,
    },
    {
      id: 9,
      name: "Сергей Николаев",
      rank: 1,
      photo: photoGarold,
    },
    {
      id: 10,
      name: "Анна Иванова",
      rank: 2,
      photo: photoGarold,
    },
    {
      id: 11,
      name: "Иван Петров",
      rank: 3,
      photo: photoGarold,
    },
  ],
};

const trainersSlice = createSlice({
  name: "trainers",
  initialState,
  reducers: {},
});

export default trainersSlice.reducer;
