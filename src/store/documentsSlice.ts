import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface DocumentState {
  documents: {
    id: number;
    name: string;
    fileUrl: string;
    category: string;
  }[];
  // selectedDocumentsByCategory:
  //   | {
  //       id: number;
  //       name: string;
  //       fileUrl: string;
  //       category: string;
  //     }[]
  //   | null;
  // selectedDocumentById: {
  //   id: number;
  //   name: string;
  //   fileUrl: string;
  //   category: string;
  // } | null;
  DocumentsStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  DocumentsError: string | null;
}

const initialState: DocumentState = {
  documents: [],
  // selectedDocumentsByCategory: null,
  // selectedDocumentById: null,
  DocumentsStatus: 'idle',
  DocumentsError: null,
};

export const fetchDocuments = createAsyncThunk(
  'documents/fetchDocuments',
  async () => {
    try {
      console.log('Sending request to: /api/documents');
      const response = await axios.get('http://localhost:5000/api/documents');
      console.log('Response data:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching documents:', error);
      throw error;
    }
  }
);

// export const fetchDocumentById = createAsyncThunk(
//   'documents/fetchDocumentById',
//   async (id: number) => {
//     try {
//       console.log(`Sending request to: /api/documents/${id}`);
//       const response = await axios.get(`http://localhost:5000/api/documents/${id}`);
//       console.log('Response data:', response.data);
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching document by ID:', error);
//       throw error;
//     }
//   }
// );

export const documentSlice = createSlice({
  name: 'documents',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDocuments.pending, (state) => {
        state.DocumentsStatus = 'loading';
      })
      .addCase(fetchDocuments.fulfilled, (state, action) => {
        state.DocumentsStatus = 'succeeded';
        state.documents = action.payload;
      })
      .addCase(fetchDocuments.rejected, (state, action) => {
        state.DocumentsStatus = 'failed';
        state.DocumentsError = action.error.message || 'Failed to fetch competitions';
      });
    // .addCase(fetchDocumentsByCategory.pending, (state) => {
    //   state.status = 'loading';
    // })
    // .addCase(fetchDocumentsByCategory.fulfilled, (state, action) => {
    //   state.status = 'succeeded';
    //   state.selectedDocumentsByCategory = action.payload;
    // })
    // .addCase(fetchDocumentsByCategory.rejected, (state, action) => {
    //   state.status = 'failed';
    //   state.error =
    //     action.error.message || 'Failed to fetch competition by id';
    // })
    // .addCase(fetchDocumentById.pending, (state) => {
    //   state.status = 'loading';
    // })
    // .addCase(fetchDocumentById.fulfilled, (state, action) => {
    //   state.status = 'succeeded';
    //   state.selectedDocumentById = action.payload;
    // })
    // .addCase(fetchDocumentById.rejected, (state, action) => {
    //   state.status = 'failed';
    //   state.error = action.error.message || 'Failed to fetch document by id';
    // });
  },
});

export default documentSlice.reducer;
