// import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import News from './pages/News/News';
import Competitions from './pages/Competitions/Competitions';
import NewsCardDetailed from './components/DetailedCards/NewsCardDetailed';
import CompetitionsCardDetailed from './components/DetailedCards/CompetitionsCardDetailed';
import './App.scss';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store/store';
import { fetchCompetitions } from './store/competitionsSlice';
import { fetchNews } from './store/newsSlice';
import ButtonScrollToTop from "./components/Buttons/ButtonScrollToTop/ButtonScrollToTop";
// import Clubs from "./pages/Clubs/Clubs";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const {competitionsStatus} = useSelector(
    (state: RootState) => state.competitions
  );
  const {newsStatus} = useSelector(
    (state: RootState) => state.news
  );
  useEffect(() => {
    if (competitionsStatus === 'idle') {
      dispatch(fetchCompetitions());
    }
  }, [competitionsStatus, dispatch]);
  useEffect(() => {
    if (newsStatus === 'idle') {
      dispatch(fetchNews());
    }
  }, [newsStatus, dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Main />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route
          path="/competitions/:id"
          element={<CompetitionsCardDetailed />}
        />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsCardDetailed />} />
        {/* <Route path="/federation" element={<Federation />} /> */}
      </Routes>
      <Footer />
      <ButtonScrollToTop />
    </BrowserRouter>
  );
}

export default App;
