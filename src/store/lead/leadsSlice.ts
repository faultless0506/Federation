import { createSlice } from "@reduxjs/toolkit";

import photoGarold from "../../assets/img/434.jpeg";
interface LeadsState {
    items: {
      id: number;
      name: string;
      photo: string;
      description: string;
      shortDescription: string;
    }[];
  }
const initialState: LeadsState = {
    items: [
      {
        id: 1,
        name: "Иван Иванов",
        photo: photoGarold,
        description: "Плейбой миллиардер мизантроп филантроп",
        shortDescription: "Президент федерации 1",
      },
      {
        id: 2,
        name: "Мария Петрова",
        photo: photoGarold,
        description: "Описание лидера 2",
        shortDescription: "Помощник президента 2",
      },
      {
        id: 3,
        name: "Алексей Сидоров",
        photo: photoGarold,
        description: "Описание лидера 3",
        shortDescription: "Помощник помощника президента 3",
      },{
        id: 4,
        name: "Елена Кузнецова",
        photo: photoGarold,
        description: "Описание лидера 4",
        shortDescription: "Помощник помощника помощника президента 4",
      },
      {
        id: 5,
        name: "Дмитрий Смирнов",
        photo: photoGarold,
        description: "Описание лидера 5",
        shortDescription: "+7(123)456-78-90, example@example.com",
      },
      {
        id: 6,
        name: "Елена Кузнецова",
        photo: photoGarold,
        description: "Описание лидера 6",
        shortDescription: "+7(123)456-78-90, example@example.com",
      },
    ],
}

const leadsSlice = createSlice({
    name: "leads",
    initialState,
    reducers: {},
  });
  
  export default leadsSlice.reducer;