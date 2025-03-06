import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import CompetitionsCard from './CompetitionsCard/CompetitionsCard';
import './Competitions.scss';
import { useState } from 'react';

export default function Competitions(): JSX.Element {
  const competitions = useSelector(
    (state: RootState) => state.competitions.items
  );

  const parseDate = (dateString: string) => {
    const [day, month, year] = dateString.split('.').map(Number);
    return new Date(year, month - 1, day); 
  };

  const futureCompetitions = competitions
    .filter((item) => parseDate(item.date) > new Date())
    .sort((a, b) => parseDate(a.date).getTime() - parseDate(b.date).getTime());

  const pastCompetitions = competitions
    .filter((item) => parseDate(item.date) < new Date())
    .sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());

  // Состояния для прошедших соревнований
  const [showAllPast, setShowAllPast] = useState(false);
  
  // Состояния для предстоящих соревнований
  const [showAllFuture, setShowAllFuture] = useState(false);

  // Обработчики для прошедших соревнований
  const toggleShowAllPastCompetitions = () => {
    setShowAllPast(!showAllPast);
  };

  // Обработчики для предстоящих соревнований
  const toggleShowAllFutureCompetitions = () => {
    setShowAllFuture(!showAllFuture);
  };

  // Определяем, какие соревнования показывать
  const displayedPastCompetitions = pastCompetitions;
  const displayedFutureCompetitions = futureCompetitions;

  return (
    <div className="container content competitions ">
      <section className="competitions__future">
        <h2>
          Предстоящие соревнования
          <button
            onClick={toggleShowAllFutureCompetitions}
            className={`${showAllFuture ? 'collapsed' : ''}`}
          >
            {showAllFuture ? 'Свернуть' : 'Развернуть'}
          </button>
        </h2>
        <div
          className={`competitions__future-list ${
            showAllFuture ? 'expanded' : 'collapsed'
          }`}
        >
          {displayedFutureCompetitions.map((item) => (
            <CompetitionsCard
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
              date={item.date}
              images={item.images}
              location={item.location}
            />
          ))}
        </div>
      </section>
      <section className="competitions__past">
        <h2>
          Прошедшие соревнования
          <button
            onClick={toggleShowAllPastCompetitions}
            className={`${showAllPast ? 'collapsed' : ''}`}
          >
            {showAllPast ? 'Свернуть' : 'Развернуть'}
          </button>
        </h2>
        <div
          className={`competitions__past-list ${
            showAllPast ? 'expanded' : 'collapsed'
          }`}
        >
          {displayedPastCompetitions.map((item) => (
            <CompetitionsCard
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
              date={item.date}
              images={item.images}
              location={item.location}
            />
          ))}
        </div>
      </section>
      <section className="competitions__rules textarea">
        <h2>Правила и условия соревнований</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis
          finibus velit, non finibus dui bibendum vitae. Donec consectetur nisi
          ac justo hendrerit, in congue felis faucibus. Sed vitae luctus felis, at
          ultricies velit. Nulla facilisi. Donec at nunc id nunc cursus semper.
          Sed euismod, justo eu consectetur eleifend, enim velit semper velit, vel
          elementum dolor dui vel ex. Maecenas vel eros id nisi placerat
          consectetur. Nullam ut ipsum vel arcu convallis luctus. Proin quis urna
          vel purus rutrum consectetur. Donec at congue felis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis
          finibus velit, non finibus dui bibendum vitae. Donec consectetur nisi
          ac justo hendrerit, in congue felis faucibus. Sed vitae luctus felis, at
          ultricies velit. Nulla facilisi. Donec at nunc id nunc cursus semper.
          Sed euismod, justo eu consectetur eleifend, enim velit semper velit, vel
          elementum dolor dui vel ex. Maecenas vel eros id nisi placerat
          consectetur. Nullam ut ipsum vel arcu convallis luctus. Proin quis urna
          vel purus rutrum consectetur. Donec at congue felis.
        </p>        
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis
          finibus velit, non finibus dui bibendum vitae. Donec consectetur nisi
          ac justo hendrerit, in congue felis faucibus. Sed vitae luctus felis, at
          ultricies velit. Nulla facilisi. Donec at nunc id nunc cursus semper.
          Sed euismod, justo eu consectetur eleifend, enim velit semper velit, vel
          elementum dolor dui vel ex. Maecenas vel eros id nisi placerat
          consectetur. Nullam ut ipsum vel arcu convallis luctus. Proin quis urna
          vel purus rutrum consectetur. Donec at congue felis.
        </p>
      </section>
    </div>
  );
}