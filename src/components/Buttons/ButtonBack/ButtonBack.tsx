import "./ButtonBack.scss";
export default function ButtonBack() {
  const goBack = () => {
    window.history.back();
  };
 
  return (
    <button className="button__back" onClick={goBack}> Назад
    </button>
  );
}
