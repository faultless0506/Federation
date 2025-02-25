import { useSelector } from "react-redux";
import "./Trainers.scss";
import { RootState } from "../../../../store/store";
// import ButtonToAll from "../../../components/Buttons/ButtonToAll/ButtonToAll";

export default function Trainers() {
  const trainers = useSelector((state: RootState) => state.trainers.items);
  const sortedtrainers = [...trainers].sort((a,b) => a.rank - b.rank).splice(0, 6);
  return (
    <div className="trainers">
      <div className="trainers__title">
        <h2>Тренерский состав</h2>
      </div>
      <div className="trainers__list">
        {sortedtrainers.map((trainer) => (
          <div className="trainers__card" key={trainer.id}>
            <img src={trainer.photo} alt={trainer.name} />
            <div className="trainers__card-info">
              <h3>
                <b>{trainer.name}</b>
              </h3>
              <p>
                <b>{`Тренер ${trainer.rank}-го разряда`}</b>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
