import { createSlice } from "@reduxjs/toolkit";
import photoGarold from "../../assets/img/434.jpeg";

interface SportsmansState {
  items: {
    id: number;
    name: string;
    rank: string;
    awards: string[];
    photo: string;
  }[];
}

const initialState: SportsmansState = {
  items: [
    {
      id: 1,
      name: "Иван Иванов",
      rank: "Мастер спорта",
      awards: ["Золото", "Серебро"],
      photo: photoGarold,
    },
    {
      id: 2,
      name: "Мария Петрова",
      rank: "Кандидат в мастера",
      awards: ["Бронза"],
      photo: photoGarold,
    },
    {
      id: 3,
      name: "Алексей Сидоров",
      rank: "Мастер спорта",
      awards: ["Золото"],
      photo: photoGarold,
    },
    {
      id: 4,
      name: "Елена Кузнецова",
      rank: "Мастер спорта",
      awards: ["Серебро", "Бронза"],
      photo: photoGarold,
    },
    {
      id: 5,
      name: "Дмитрий Смирнов",
      rank: "Кандидат в мастера",
      awards: ["Бронза"],
      photo: photoGarold,
    },
    {
      id: 6,
      name: "Ольга Васильева",
      rank: "Мастер спорта",
      awards: ["Золото", "Серебро", "Серебро", "Бронза", "Золото","Серебро", "Серебро", "Бронза", "Золото","Серебро"],
      photo: photoGarold,
    },
    {
      id: 7,
      name: "Андрей Кузьмин",
      rank: "Мастер спорта",
      awards: ["Золото"],
      photo: photoGarold,
    },
    {
      id: 8,
      name: "Юлия Захарова",
      rank: "Кандидат в мастера",
      awards: ["Серебро"],
      photo: photoGarold,
    },
    {
      id: 9,
      name: "Сергей Николаев",
      rank: "Мастер спорта",
      awards: ["Золото", "Бронза"],
      photo: photoGarold,
    },
    {
      id: 10,
      name: "Анна Иванова",
      rank: "Мастер спорта",
      awards: ["Золото", "Серебро", "Бронза", "Золото","Серебро", "Серебро", "Бронза", "Золото","Серебро"],
      photo: photoGarold,
    },
    {
      id: 11,
      name: "Иван Петров",
      rank: "Кандидат в мастера",
      awards: ["Серебро"],
      photo: photoGarold,
    },
  ],
};

const sportsmansSlice = createSlice({
  name: "sportsmans",
  initialState,
  reducers: {},
});

export default sportsmansSlice.reducer;
