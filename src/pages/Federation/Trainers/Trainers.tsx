import { useSelector } from "react-redux";
import "./Trainers.scss";
import { RootState } from "../../../store/store";
import { useEffect, useState } from "react";

export default function Trainers() {
  const trainers = useSelector((state: RootState) => state.trainers.items);
  const sortedTrainers = [...trainers].sort((a, b) => a.rank - b.rank);

  const [showAll, setShowAll] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
     
    if (!showAll) {
      timer = setTimeout(() => {
        setIsCollapsed(true);
      }, 300); // Задержка должна совпадать с длительностью перехода
    } else {
      setIsCollapsed(false);
    }

    return () => clearTimeout(timer);
  }, [showAll]);

  const displayedTrainers = isCollapsed ? sortedTrainers.slice(0, 6) : sortedTrainers;

  return (
    <section className="trainers">
      <div className="trainers__title">
        <h2>
          Тренерский состав
          <button onClick={toggleShowAll} className={`${showAll ? "collapsed" : ""}`}>
            {showAll ? "Свернуть" : "Развернуть"}
          </button>
        </h2>
      </div>
      <div className={`trainers__list ${showAll ? "" : "collapsed"}`}>
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
    </section>
  );
}
