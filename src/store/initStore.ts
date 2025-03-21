
import { fetchDocuments } from './documentsSlice';
import { fetchCompetitions } from './competitionsSlice';
import { fetchNews } from './newsSlice';

const initStore = () => {
  fetchDocuments();
  fetchCompetitions();
  fetchNews();
};

export default initStore;