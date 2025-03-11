// import React from "react";
import { useSelector } from 'react-redux';
import NewsCard from '../../components/News&CompetitionsCard/NewsCard';
import './News.scss';
import { selectSortedNews } from '../../store/news/newsSlice';

export default function News(): JSX.Element {
const sortedNews = useSelector(selectSortedNews);
  return (
    <section className="container content news">
      <h2 className='section-header'>News</h2>
      {sortedNews.map((item) => (
        <NewsCard
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          date={item.date}
          images={item.images}
        />
      ))}
    </section>
  );
}
