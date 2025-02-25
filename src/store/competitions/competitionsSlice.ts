import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import competitionImage from "./../../assets/img/268677.jpg";

interface CompetitionState {
  items: {
    id: number;
    title: string;
    content: string;
    location: string;
    date: string;
    image: string;
  }[];
}

const initialState: CompetitionState = {
  items: [
    {
      id: 1,
      title:
        "Competition adsw asddsdasd asdasddwad asdasd dsadasd sdadadsad dsadadsa",
      content: "This is the content of competition 1",
      location: "Location 1",
      date: "01.10.2021",
      image: competitionImage,
    },
    {
      id: 2,
      title: "Competition  12312323123 asd dsa weqe sad qww qwe",
      content: "This is the content of competition 2",
      location: "Location 2",
      date: "02.10.2022",
      image: competitionImage,
    },
    {
      id: 3,
      title:
        "Competition sadsds asddd qwewed qwe asd wqweqwee eqwes wqed aasd wqweqweew wqe",
      content: "This is the content of competition 3",
      location: "Location 3",
      date: "03.10.2023",
      image: competitionImage,
    },
    {
      id: 4,
      title: "Competition asddsadsadssda dasdasd asd",
      content: "This is the content of competition 4",
      location: "Location 4",
      date: "04.10.2023",
      image: competitionImage,
    },
    {
      id: 5,
      title: "Competition asdsdasdds dassad sad",
      content: "This is the content of competition 1",
      location: "Location 1",
      date: "01.10.2025",
      image: competitionImage,
    },
    {
      id: 6,
      title: "Competition dsasda dasd das sadasdd",
      content: "This is the content of competition 2",
      location: "Location 2",
      date: "02.10.2026",
      image: competitionImage,
    },
    {
      id: 7,
      title: "Competition asdsa adasdas sads d dasd dd asd",
      content: "This is the content of competition 3",
      location: "Location 3",
      date: "03.10.2027",
      image: competitionImage,
    },
    {
      id: 8,
      title: "Competition 4",
      content: "This is the content of competition 4",
      location: "Location 4",
      date: "04.10.2028",
      image: competitionImage,
    },
    {
      id: 9,
      title: "Competition asddsasddasdad",
      content: "This is the content of competition 4",
      location: "Location 4",
      date: "04.10.2028",
      image: competitionImage,
    },
    {
      id: 10,
      title: "Competition 123",
      content: "This is the content of competition 4",
      location: "Location 4",
      date: "04.10.2028",
      image: competitionImage,
    },
  ],
};

const competitionsSlice = createSlice({
  name: "competitions",
  initialState,
  reducers: {
    addCompetition: (
      state,
      action: PayloadAction<{
        id: number;
        title: string;
        content: string;
        location: string;
        date: string;
        image: string;
      }>
    ) => {
      state.items.push(action.payload);
    },
  },
});

export const { addCompetition } = competitionsSlice.actions;
export default competitionsSlice.reducer;
