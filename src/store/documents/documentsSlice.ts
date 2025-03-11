import { createSlice} from '@reduxjs/toolkit';
import doc1 from './../../assets/documents/mezhdunarodnaya-konvencziya-soveta-evropyi-protiv-primeneniya-dopinga-(strasburg,-16-noyabrya-1989-g.).pdf';
import doc2 from './../../assets/documents/mezhdunarodnaya-konvencziya-yunesko-o-borbe-s-dopingom-v-sporte-(parizh-2005).pdf';

interface DocumentState {
  items: {
    id: number;
    name: string;
    url: string;
    doctype: number;
  }[];
}

const initialState: DocumentState = {
  items: [
    {
      id: 1,
      name: 'Постановление о постановлении о постановлении о постановлении постановления ',
      url: doc1,
      doctype: 1,
    },
    { id: 2, name: 'Document 2', url: doc2, doctype: 2 },
    {
      id: 3,
      name: 'Document 3',
      url: doc2,
      doctype: 2,
    },
    {
      id: 4,
      name: 'Постановление о постановлении о постановлении о постановлении постановления ',
      url: doc1,
      doctype: 3,
    },
    { id: 5, name: 'Document 2', url: doc2, doctype: 5 },
    { id: 5, name: 'Document 2', url: doc2, doctype: 3 },
    {
      id: 6,
      name: 'Document 2',
      url: doc2,
      doctype: 3,
    },
    {
      id: 7,
      name: 'Постановление о постановлении о постановлении о постановлении постановления ',
      url: doc1,
      doctype: 3,
    },
    { id: 8, name: 'Document 2', url: doc2, doctype: 2 },
    {
      id: 9,
      name: 'Document 3',
      url: doc2,
      doctype: 3,
    },{
      id: 10,
      name: 'Document 3',
      url: doc2,
      doctype: 3,
    },{
      id: 11,
      name: 'Document 3',
      url: doc2,
      doctype: 3,
    },{
      id: 12,
      name: 'Document 3',
      url: doc2,
      doctype: 3,
    },
  ],
};

const documentSlice = createSlice({
  name: 'documents',
  initialState,
  reducers: {},
});

export default documentSlice.reducer;