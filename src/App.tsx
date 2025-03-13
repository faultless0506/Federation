// import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import News from './pages/News/News';
import Competitions from './pages/Competitions/Competitions';
import NewsCardDetailed from './components/CompetitionsAndNewsDetailed/NewsCardDetailed';
import CompetitionsCardDetailed from './components/CompetitionsAndNewsDetailed/CompetitionsCardDetailed';
import './App.scss';
import Footer from './components/Footer/Footer';
import Federation from './pages/Federation/Federation';
// import ButtonScrollToTop from "./components/Buttons/ButtonScrollToTop/ButtonScrollToTop";
// import Clubs from "./pages/Clubs/Clubs";

function App() {
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
        <Route path="/federation" element={<Federation />} />
      </Routes>
      <Footer />
      {/* <ButtonScrollToTop /> */}
    </BrowserRouter>
  );
}

export default App;
