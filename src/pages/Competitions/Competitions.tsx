import CompetitionsCard from '../../components/Cards/CompetitionsCard';
import './Competitions.scss';
import { useState } from 'react';
import ToggleListButton from '../../components/Buttons/ToggleListButton/ToggleListButton';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import LoadingIndicator from '../../components/Indicators/LoadingIndicator/LoadingIndicator';
import FailedIndicator from '../../components/Indicators/FailedIndicator/FailedIndicator';
const parseDate = (dateString: string) => {
  const [day, month, year] = dateString.split('/').map(Number);
  return new Date(year, month - 1, day);
};

export default function Competitions() {
  const competitionsContainer = useSelector(
    (state: RootState) => state.competitions
  );

  const futureCompetitions = competitionsContainer.competitions
    .filter((item) => parseDate(item.startDate) > new Date())
    .sort(
      (a, b) =>
        parseDate(a.startDate).getTime() - parseDate(b.startDate).getTime()
    );

  const pastCompetitions = competitionsContainer.competitions
    .filter((item) => parseDate(item.startDate) < new Date())
    .sort(
      (a, b) =>
        parseDate(b.startDate).getTime() - parseDate(a.startDate).getTime()
    );

  const [showAllPast, setShowAllPast] = useState(false);
  const [showAllFuture, setShowAllFuture] = useState(false);

  const toggleShowAllPastCompetitions = () => {
    setShowAllPast(!showAllPast);
  };

  const toggleShowAllFutureCompetitions = () => {
    setShowAllFuture(!showAllFuture);
  };
  const displayedPastCompetitions = pastCompetitions;
  const displayedFutureCompetitions = futureCompetitions;
  if (competitionsContainer.competitionsStatus === 'loading') {
    return (
      <>
        <div className="container content competitions">
          <section className="competitions__future">
            <h2 className="section-header">Предстоящие соревнования</h2>
            <LoadingIndicator />
          </section>

          <section className="competitions__past">
            <h2 className="section-header">Прошедшие соревнования</h2>
            <LoadingIndicator />
          </section>
        </div>
      </>
    );
  }
  if (competitionsContainer.competitionsStatus === 'failed') {
    return (
      <>
        <div className="container content competitions">
          <section className="competitions__future">
            <h2 className="section-header">Предстоящие соревнования</h2>
            <FailedIndicator />
          </section>

          <section className="competitions__past">
            <h2 className="section-header">Прошедшие соревнования</h2>
            <FailedIndicator />
          </section>
        </div>
      </>
    );
  }
  return (
    <div className="container content competitions">
      <section className="competitions__future">
        <h2 className="section-header">Предстоящие соревнования</h2>
        {futureCompetitions.length > 0 ? (
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
                date={item.startDate}
                images={item.images}
                location={item.location}
              />
            ))}
          </div>
        ) : (
          <p className="failed">Нет предстоящих соревнований</p>
        )}
        {futureCompetitions.length > 2 ? (
          <ToggleListButton
            isExpanded={showAllFuture}
            expandText="Развернуть"
            collapseText="Свернуть"
            onClick={toggleShowAllFutureCompetitions}
            className="bottom-button"
          />
        ) : null}
      </section>
      <section className="competitions__past">
        <h2 className="section-header">Прошедшие соревнования</h2>
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
              date={item.startDate}
              images={item.images}
              location={item.location}
            />
          ))}
        </div>
        {pastCompetitions.length > 2 ? (
          <ToggleListButton
            isExpanded={showAllPast}
            expandText="Развернуть"
            collapseText="Свернуть"
            onClick={toggleShowAllPastCompetitions}
            className="bottom-button"
          />
        ) : null}
      </section>
    </div>
  );
}
