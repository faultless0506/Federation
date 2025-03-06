// import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import NewsCard from "./NewsCard/NewsCard";
import "./News.scss";

export default function News(): JSX.Element {
  const news = useSelector((state: RootState) => state.news.items);
  return (
    <section className="container content  news">
        <h2>News</h2>
        {news.map((item) => (
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
