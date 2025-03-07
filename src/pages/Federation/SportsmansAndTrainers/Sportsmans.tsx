import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
// import './Sportsmans.scss';
import { RootState } from '../../../store/store';
import ToggleListButton from '../../../components/Buttons/ToggleListButton/ToggleListButton';

export default function Sportsmans() {
  // Получаем список спортсменов из Redux хранилища
  const sportsmans = useSelector((state: RootState) => state.sportsmans.items);
  // Сортируем спортсменов по количеству наград, от большего к меньшему
  const sortedSportsmans = [...sportsmans].sort(
    (a, b) => b.awards.length - a.awards.length
  );
  // Состояние для отслеживания, показывать ли всех спортсменов
  const [showAll, setShowAll] = useState(false);

  // Состояние для отслеживания, свернут ли список (для анимации)
  const [isCollapsed, setIsCollapsed] = useState(true);

  /**
   * Функция для переключения состояния показа всех спортсменов
   * Инвертирует текущее значение showAll
   */
  const toggleShowAll = () => {
    setShowAll((prevState) => !prevState);
  };

  /**
   * Эффект для управления анимацией сворачивания/разворачивания списка
   * Использует таймер для задержки сворачивания, чтобы анимация была плавной
   */
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

  /**
   * Определяем, каких спортсменов отображать:
   * - если список свернут, показываем только первых 6
   * - если развернут, показываем всех
   */
  const displayedSportsmans = isCollapsed
    ? sortedSportsmans.slice(0, 6)
    : sortedSportsmans;
  return (
    <section className="sportsmans">
      {/* Заголовок секции с кнопкой переключения */}
      <div className="sportsmans__title">
        <h2>
          Ведущие спортсмены сборной Москвы
          <ToggleListButton isExpanded={showAll} onClick={toggleShowAll} />
        </h2>
      </div>
      {/* Список карточек спортсменов с классом для анимации */}
      <div className={`sportsmans__list ${showAll ? 'expanded' : 'collapsed'}`}>
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
