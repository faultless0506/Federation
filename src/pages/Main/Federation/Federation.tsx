import Sportsmans from "./Sportsmans/Sportsmans";
import "./Federation.scss";

export default function Federation() {
  return (
    <div className="federation">
      <h1>Федерация спортивного метания ножа г. Москва</h1>
      {/* <FederationHead /> */}
      <Sportsmans />
    </div>
  );
}
