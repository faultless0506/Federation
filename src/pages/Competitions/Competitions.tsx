
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CompetitionsCard from "./CompetitionsCard/CompetitionsCard";
import "./Competitions.scss";

export default function Competitions(): JSX.Element {
  const news = useSelector((state: RootState) => state.competitions.items);
  return (
    <div className="container content  competitions">
        <h2>Соревнования</h2>
        {news.map((item) => (
          <CompetitionsCard
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            date={item.date}
            image={item.image}
            location={item.location}
          />
        ))}
    </div>
  );
}
