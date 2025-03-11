import { createSlice } from "@reduxjs/toolkit";

import photoGarold from "../../assets/img/434.jpeg";
interface LeadsState {
    items: {
      id: number;
      name: string;
      photo: string;
      description: string;
      shortDescription: string;
      class:number;
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
        class: 1,
      },
      {
        id: 2,
        name: "Мария Петрова",
        photo: photoGarold,
        description: "Описание лидера 2",
        shortDescription: "Помощник президента 2",
        class: 1,
      },
      {
        id: 3,
        name: "Алексей Сидоров",
        photo: photoGarold,
        description: "Описание лидера 3",
        shortDescription: "Помощник помощника президента 3",
        class: 1,
      },{
        id: 4,
        name: "Елена Кузнецова",
        photo: photoGarold,
        description: "Описание лидера 4",
        shortDescription: "Помощник помощника помощника президента 4",
        class: 1,
      },
      {
        id: 5,
        name: "Дмитрий Смирнов",
        photo: photoGarold,
        description: "Описание лидера 5",
        shortDescription: "+7(123)456-78-90, example@example.com",
        class: 1,
      },
      {
        id: 6,
        name: "Елена Кузнецова",
        photo: photoGarold,
        description: "Описание лидера 6",
        shortDescription: "+7(123)456-78-90, example@example.com",
        class: 1,
      },
      {
        id: 7,
        name: "Елена Кузнецова",
        photo: photoGarold,
        description: "Описание лидера 6",
        shortDescription: "+7(123)456-78-90, example@example.com",
        class: 1,
      },
      {
        id: 8,
        name: "Елена Кузнецова",
        photo: photoGarold,
        description: "Описание лидера 6",
        shortDescription: "+7(123)456-78-90, example@example.com",
        class: 2,
      },
      {
        id: 9,
        name: "Елена Кузнецова",
        photo: photoGarold,
        description: "Описание лидера 6",
        shortDescription: "+7(123)456-78-90, example@example.com",
        class: 2,
      },

    ],
}

const leadsSlice = createSlice({
    name: "leads",
    initialState,
    reducers: {},
  });
  
  export default leadsSlice.reducer;