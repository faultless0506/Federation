import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface NewsState {
  news: Array<{
    id: number;
    title: string;
    content: string[];
    images: string[];
    createdAt: Date;
    updatedAt: Date;
  }>;
  // selectedNews: {
  //   id: number;
  //   title: string;
  //   content: string[];
  //   images: string[];
  //   createdAt: Date;
  //   updatedAt: Date;
  // } | null;
  newsStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  newsError: string | null;
}

const initialState: NewsState = {
  news: [],
  // selectedNews: null,
  newsStatus: 'idle',
  newsError: null,
};

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  try {
    // console.log('Sending request to: /api/news');
    const response = await axios.get('http://localhost:5000/api/news');
    // console.log('Response data:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
});



const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.newsStatus = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.newsStatus = 'succeeded';
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.newsStatus = 'failed';
        state.newsError = action.error.message || 'Failed to fetch news';
      })
      // .addCase(fetchNewsById.pending, (state) => {
      //   state.status = 'loading';
      // })
      // .addCase(fetchNewsById.fulfilled, (state, action) => {
      //   state.status = 'succeeded';
      //   state.selectedNews = action.payload;
      // })
      // .addCase(fetchNewsById.rejected, (state, action) => {
      //   state.status = 'failed';
      //   state.error = action.error.message || 'Failed to fetch news by id';
      // });
  },
});

export default newsSlice.reducer;
