import "./SliderArrows.scss";
const NextArrow: React.FC<{
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}> = ({ onClick }) => {
  return (
    <div onClick={onClick} className="next-arrow">
      <button></button>
    </div>
  );
};

const PrevArrow: React.FC<{
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}> = ({ onClick }) => {
  return (
    <div onClick={onClick} className="prev-arrow">
      <button></button>
    </div>
  );
};
export { NextArrow, PrevArrow };
