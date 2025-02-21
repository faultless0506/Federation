import { useSelector } from "react-redux";
import "./Sportsmans.scss";
import { RootState } from "../../../../store/store";
// import ButtonToAll from "../../../components/Buttons/ButtonToAll/ButtonToAll";

export default function Sportsmans() {
  const sportsmans = useSelector((state: RootState) => state.sportsmans.items).sort((a, b) => a.awards.length - b.awards.length);

  return (
    <div className="sportsmans">
      <div className="sportsmans__title">
        <h2>Ведущие спортсмены</h2>
      </div>
      <div className="sportsmans__list">
        {sportsmans.map((sportsman) => (
          <div className="sportsmans__card" key={sportsman.id}>
            <img src={sportsman.photo} alt={sportsman.name} />
            <div className="sportsmans__card-info">
              <h3>
                <b>{sportsman.name}</b>
                <p>{sportsman.rank}</p>
              </h3>
              <p>
                <b>Награды:</b> {sportsman.awards.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
