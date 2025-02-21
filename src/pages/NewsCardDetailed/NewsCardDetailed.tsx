import React from "react";
import { useParams } from "react-router-dom";
import { useSelector} from "react-redux";
import "./NewsCardDetailed.scss";
import { RootState } from "../../store/store";
import ButtonBack from "../../components/Buttons/ButtonBack/ButtonBack";

const NewsCardDetailed: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const currentNew = useSelector((state: RootState) => state.news.items.find((item) => item.id === Number(id)));
  if (!currentNew) {
    return <div>News not found</div>
  }

  // const goBack = () => {
  //   window.history.back();
  // };

  return (
    <div className="container content news__card-detailed">
      <h2>
        {currentNew.title}
        {/* <button onClick={goBack}>Вернуться на предыдущую страницу</button> */}
        <ButtonBack />
      </h2>
      <div className="news__card-detailed-content">
        <img src={currentNew.image} alt={currentNew.title} />
        <p>{currentNew.content}</p>
        <span>{currentNew.date}</span>
      </div>
    </div>
  );
};

export default NewsCardDetailed;
