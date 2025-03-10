
import "./FederationLead.scss";
import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";

export default function FederationLead() {
  const leads = useSelector((state: RootState) => state.leads.items);

  return (
    <section className="leads">
      <h2 className="section-header">Руководство федерации</h2>
      <div className="leads__list">
        {leads.map((lead, index) => (
          <article className="leads__card" key={lead.id}>
            <img src={lead.photo} alt={lead.name} />
            <div className="leads__card-info">
              <h3>
                <b>{lead.name}</b>
              </h3>
              {index === 0 ? (
                <div>
                  <p>
                    <b>{lead.shortDescription}</b>
                    <br />
                  </p>
                  <p>{lead.description}</p>
                </div>
              ) : (
                <p>{lead.shortDescription || lead.description}</p> 
              )}
            </div>
          </article>

          
        ))}
      </div>
    </section>
  );
}
