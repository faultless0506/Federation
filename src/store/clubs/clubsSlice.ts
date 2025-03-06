import { createSlice } from "@reduxjs/toolkit";
import clubImage from '../../assets/img/268677.jpg';
interface ClubsState {
  items: {
    id: number;
    name: string;
    img: string;
    description: string;
    location: string;
  }[];
}

const initialState: ClubsState = {
  items: [
    {
      id: 1,
      name: "Club 1",
      img: clubImage,
      description: "Description of Club 1",
      location: "Location of Club 1",
    },
    {
      id: 2,
      name: "Club 2",
      img: clubImage,
      description: "Description of Club 2",
      location: "Location of Club 2",
    },
    {
      id: 3,
      name: "Club 3",
      img: clubImage,
      description: "Description of Club 3",
      location: "Location of Club 3",
    },
    {
      id: 4,
      name: "Club 4",
      img: clubImage,
      description: "Description of Club 4",
      location: "Location of Club 4",
    },
    {
      id: 5,
      name: "Club 5",
      img: clubImage,
      description: "Description of Club 5",
      location: "Location of Club 5",
    }
  ],
};

const clubsSlice = createSlice({
  name: "clubs",
  initialState,
  reducers: {},
});

export default clubsSlice.reducer;