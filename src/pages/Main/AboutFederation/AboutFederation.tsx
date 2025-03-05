import Sportsmans from "./Sportsmans/Sportsmans";
import "./AboutFederation.scss";
import Trainers from "./Trainers/Trainers";
import FederationLead from "./FederationLead/FederationLead";

export default function AboutFederation() {
  return (
    <div className="federation">
      <h1>Федерация спортивного метания ножа г. Москва</h1>
      <Sportsmans />
      <FederationLead />
      <Trainers />
    </div>
  );
}
