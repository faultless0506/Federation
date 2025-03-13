import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { RootState } from '../../store/store';
import ToggleListButton from '../Buttons/ToggleListButton/ToggleListButton';

export default function Sportsmans() {
  const sportsmans = useSelector((state: RootState) => state.sportsmans.items);
  const sortedSportsmans = [...sportsmans].sort(
    (a, b) => b.awards.length - a.awards.length
  );
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll((prevState) => !prevState);
  };

  useEffect(() => {
    if (!showAll) {
      setShowAll(false);
    } else {
      setShowAll(true);
    }
  }, [showAll]);

  return (
    <section className="sportsmans" id="sportsmans">
      <div className="section-header">
        <h2>Ведущие спортсмены сборной Москвы</h2>
        {/* <ToggleListButton isExpanded={showAll} onClick={toggleShowAll} /> */}
      </div>
      <div className={`sportsmans__list ${showAll ? 'expanded' : 'collapsed'}`}>
        {sortedSportsmans.map((sportsman) => (
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

      <ToggleListButton
        isExpanded={showAll}
        expandText="Показать всех"
        collapseText="Свернуть"
        onClick={toggleShowAll}
        className="bottom-button"
      />
    </section>
  );
}
