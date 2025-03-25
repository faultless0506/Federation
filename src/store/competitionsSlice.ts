import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getApiBaseUrl } from '../utils/apiUtils';

interface CompetitionsState {
  competitions: Array<{
    id: number;
    title: string;
    content: string[];
    images: string[];
    location: string;
    startDate: string;
    resultsId: number;
    createdAt: Date;
    updatedAt: Date;
  }>;
  // selectedCompetition: {
  //   id: number;
  //   title: string;
  //   content: string[];
  //   images: string[];
  //   location: string;
  //   startDate: string;
  //   resultsId: number;
  //   createdAt: Date;
  //   updatedAt: Date;
  // } | null;
  competitionsStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  competitionsError: string | null;
}

const initialState: CompetitionsState = {
  competitions: [],
  // selectedCompetition: null,
  competitionsStatus: 'idle',
  competitionsError: null,
};

export const fetchCompetitions = createAsyncThunk(
  'competitions/fetchCompetitions',
  async () => {
    try {
      // console.log('Sending request to: /api/competitions');
      // Используем утилиту для получения базового URL
      const apiUrl = `${getApiBaseUrl()}/api/competitions`;
      console.log('Using API URL:', apiUrl);
      const response = await axios.get(apiUrl);
      // console.log('Response data:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching competitions:', error);
      throw error;
    }
  }
);

// export const fetchCompetitionById = createAsyncThunk(
//   'competitions/fetchCompetitionById',
//   async (id: string) => {
//     try {
//         const apiUrl = `${getApiBaseUrl()}/api/competitions/${id}`;
//         const response = await axios.get(apiUrl);
//         // console.log(response.data);
//         return response.data;
//
//     } catch (error) {
//       console.error('Error fetching competition by id:', error);
//       throw error;
//     }
//   }
//
// );

const competitionsSlice = createSlice({
  name: 'competitions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompetitions.pending, (state) => {
        state.competitionsStatus = 'loading';
      })
      .addCase(fetchCompetitions.fulfilled, (state, action) => {
        state.competitionsStatus = 'succeeded';
        state.competitions = action.payload;
      })
      .addCase(fetchCompetitions.rejected, (state, action) => {
        state.competitionsStatus = 'failed';
        state.competitionsError =
          action.error.message || 'Failed to fetch competitions';
      });
  },
});
export default competitionsSlice.reducer;
