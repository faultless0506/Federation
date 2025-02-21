import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import About from "./pages/About";
import News from "./pages/News/News";
import Competitions from "./pages/Competitions/Competitions";
import NewsCardDetailed from "./pages/NewsCardDetailed/NewsCardDetailed"; 
import CompetitionsCardDetailed from "./pages/CompetitionsCardDetailed/CompetitionsCardDetailed";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Main />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/competitions/:id" element={<CompetitionsCardDetailed />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsCardDetailed />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;