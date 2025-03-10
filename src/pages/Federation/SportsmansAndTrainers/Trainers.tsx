import { useSelector } from 'react-redux';
// import './Trainers.scss';
import { RootState } from '../../../store/store';
import { useEffect, useState } from 'react';
import ToggleListButton from '../../../components/Buttons/ToggleListButton/ToggleListButton';

export default function Trainers() {
  const trainers = useSelector((state: RootState) => state.trainers.items);

  // Сортируем тренеров по рангу (от меньшего к большему)
  const sortedTrainers = [...trainers].sort((a, b) => a.rank - b.rank);

  // Состояние для отслеживания, показывать ли все карточки тренеров
  const [showAll, setShowAll] = useState(false);

  // Состояние для отслеживания, свернут ли список (для анимации)
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleShowAll = () => {
    setShowAll((prevState) => !prevState);
  };

  // Эффект для управления анимацией сворачивания/разворачивания списка
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (!showAll) {
      // Задержка перед сворачиванием списка для плавной анимации
      timer = setTimeout(() => {
        setIsCollapsed(true);
      }, 300);
    } else {
      // Мгновенно разворачиваем список
      setIsCollapsed(false);
    }

    // Очистка таймера при размонтировании компонента или изменении showAll
    return () => clearTimeout(timer);
  }, [showAll]);

  // Определяем, какие тренеры отображать: все или только первые 6
  const displayedTrainers = isCollapsed
    ? sortedTrainers.slice(0, 6)
    : sortedTrainers;

  return (
    <section className="trainers">
      {/* Заголовок секции с кнопкой переключения */}
      <div className="section-header">
        <h2>
          Тренерский состав
        </h2>
          <ToggleListButton isExpanded={showAll} onClick={toggleShowAll} />
      </div>
      {/* Список карточек тренеров с классом для анимации */}
      <div className={`trainers__list ${showAll ? 'expanded' : 'collapsed'}`}>
        {displayedTrainers.map((trainer) => (
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
        expandText="Свернуть"
        onClick={toggleShowAll}
        className="bottom-button"
      />
    </section>
  );
}
