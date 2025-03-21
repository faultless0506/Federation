import './News.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import LoadingIndicator from '../../components/Indicators/LoadingIndicator/LoadingIndicator';
import FailedIndicator from '../../components/Indicators/FailedIndicator/FailedIndicator';
import NewsCard from '../../components/Cards/NewsCard';
export default function News() {
  const newsContainer = useSelector((state: RootState) => state.news);

  if (newsContainer.newsStatus === 'loading') {
    return (
      <>
      <section className="container content news">
        <h2 className="section-header">News</h2>
        <LoadingIndicator />
      </section>
      </>
    );
  }
  if (newsContainer.newsStatus === 'failed') {
    return (
      <>
    <section className="container content news">
        <h2 className="section-header">News</h2>
        <FailedIndicator />
      </section>
      </>
    );
  }
  return (
    <section className="container content news">
      <h2 className="section-header">News</h2>
      <div className="news__list">
        {newsContainer.news.map((item) => (
          <NewsCard
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            date={item.createdAt
              .toString()
              .split('T')[0]
              .split('-')
              .reverse()
              .join('/')}
            images={item.images}
          />
        ))}
      </div>
    </section>
  );
}
