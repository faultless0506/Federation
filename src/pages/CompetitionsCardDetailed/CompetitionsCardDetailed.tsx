import React from "react";
import { useParams } from "react-router-dom";
import { useSelector} from "react-redux";
import "./CompetitionsCardDetailed.scss";
import { RootState } from "../../store/store";
import ButtonBack from "../../components/Buttons/ButtonBack/ButtonBack";

const CompetitionsCardDetailed: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const currentCompetition = useSelector((state: RootState) => state.competitions.items.find((item) => item.id === Number(id)));
  if (!currentCompetition) {
    return <div>Competition not found</div>
  }

  // const goBack = () => {
  //   window.history.back();
  // };

  return (
    <div className="container content competitions__card-detailed">
      <h2>
        {currentCompetition.title}
        <ButtonBack />
      </h2>
      <div className="competitions__card-detailed-content">
        <img src={currentCompetition.image} alt={currentCompetition.title} />
        <p>{currentCompetition.content}</p>
        <span>{currentCompetition.date}, { currentCompetition.location}</span>
      </div>
    </div>
    
  );
};

export default CompetitionsCardDetailed;
