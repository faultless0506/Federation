import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface CompetitionsState {
  competitions: Array<{
    id: number;
    title: string;
    content: string[];
    images: string[];
    location: string; 
    startDate: string;
    createdAt: Date;
    updatedAt: Date;
  }>;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CompetitionsState = {
  competitions: [],
  status: 'idle',
  error: null,
};

export const fetchCompetitions = createAsyncThunk('competitions/fetchCompetitions', async () => {
  try {
    console.log('Sending request to: /api/competitions');
    const response = await axios.get('http://localhost:5000/api/competitions');
    console.log('Response data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching competitions:', error);
    throw error;
  }
});

export const fetchCompetitionById = createAsyncThunk(
  'competitions/fetchCompetitionById',
  async (id: number) => {
    const response = await axios.get(`http://localhost:5000/api/competitions/${id}`);
    // console.log(response.data);
    return response.data;
  }
);

const competitionsSlice = createSlice({
  name: 'competitions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompetitions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCompetitions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.competitions = action.payload;
      })
      .addCase(fetchCompetitions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch competitions';
      });
  },
});
export default competitionsSlice.reducer;
