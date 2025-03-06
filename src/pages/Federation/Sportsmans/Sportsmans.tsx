import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import './Sportsmans.scss';
import { RootState } from '../../../store/store';

export default function Sportsmans() {
  const sportsmans = useSelector((state: RootState) => state.sportsmans.items);
  const sortedSportsmans = [...sportsmans].sort(
    (a, b) => b.awards.length - a.awards.length
  );

  const [showAll, setShowAll] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
 
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!showAll) {
      timer = setTimeout(() => {
        setIsCollapsed(true);
      }, 300);
    } else {
      setIsCollapsed(false);
    }

    return () => clearTimeout(timer);
  }, [showAll]);

  const displayedSportsmans = isCollapsed
    ? sortedSportsmans.slice(0, 6)
    : sortedSportsmans;

  return (
    <section className="sportsmans">
      <div className="sportsmans__title">
        <h2>
          Ведущие спортсмены сборной Москвы
          <button
            onClick={toggleShowAll}
            className={`${showAll ? 'collapsed' : ''}`}
          >
            {showAll ? 'Свернуть' : 'Развернуть'}
          </button>
        </h2>
      </div>
      <div className={`sportsmans__list ${showAll ? '' : 'collapsed'}`}>
        {displayedSportsmans.map((sportsman) => (
          <article className="sportsmans__card" key={sportsman.id}>
            <img src={sportsman.photo} alt={sportsman.name} />
            <div className="sportsmans__card-info">
              <h3>
                <b>{sportsman.name}</b>
                <b>
                  <p>{sportsman.rank}</p>
                </b>
              </h3>
              <p>Награды: {sportsman.awards.join(', ')}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
