// import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import NewsCard from '../../components/Cards/NewsCard';
import './News.scss';
import { fetchNews } from '../../store/newsSlice';
import { AppDispatch, RootState } from '../../store/store';
import { useEffect } from 'react';

export default function News(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { news, status, error } = useSelector((state: RootState) => state.news);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchNews());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }

  return (
    <section className="container content news">
      <h2 className="section-header">News</h2>
      {news.map((item) => (
        <NewsCard
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          date={item.createdAt.toString().split('T')[0].split('-').reverse().join('/')}
          images={item.images}
        />
      ))}
    </section>
  );
}
