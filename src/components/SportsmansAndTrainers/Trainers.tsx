import { useSelector } from 'react-redux';
// import './Trainers.scss';
import { RootState } from '../../store/store';
import { useEffect, useState } from 'react';
import ToggleListButton from '../Buttons/ToggleListButton/ToggleListButton';

export default function Trainers() {
  const trainers = useSelector((state: RootState) => state.trainers.items);

  const sortedTrainers = [...trainers].sort((a, b) => a.rank - b.rank);

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
    <section className="trainers">
      <div className="section-header">
        <h2>Тренерский состав</h2>
      </div>
      <div className={`trainers__list ${showAll ? 'expanded' : 'collapsed'}`}>
        {sortedTrainers.map((trainer) => (
          <article className="trainers__card" key={trainer.id}>
            <img src={trainer.photo} alt={trainer.name} />
            <div className="trainers__card-info">
              <h3>
                <b>{trainer.name}</b>
              </h3>
              <p>
                <b>{`Тренер ${trainer.rank}-го разряда`}</b>
              </p>
            </div>
          </article>
        ))}
      </div>
      {/* Нижняя кнопка для разворачивания/свертывания списка */}
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
