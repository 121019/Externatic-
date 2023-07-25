import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";

import "./JobOfferPage.css";

function JobOfferPage({ offers }) {
  const { offerid } = useParams();

  const offer = offers.filter((of) => of.id === parseInt(offerid, 10));
  const myOffer = offer[0];
  return (
    <div className="JobOfferPage">
      <section className="JobOfferPage_section1">
        <h1>{myOffer.JobTitle}</h1>
      </section>
      <section className="JobOfferPage_section2">
        <h3>{myOffer.Location}</h3>
      </section>

      <section className="JobOfferPage_section3">
        <div>
          <p>
            <strong>Salaire:</strong> 28k-35k brut
          </p>
          <p>
            <strong>Catégorie:</strong> {myOffer.category}
          </p>
          <p>
            <strong>Date de mise en ligne:</strong> {myOffer.Upload_Date}
          </p>
        </div>
      </section>
      <hr className="joboffer_separator" />
      <section className="JobOfferPage_section4">
        <div>
          <h2>Description: </h2>
          <p>{myOffer.Description}</p>
        </div>
      </section>
      <hr className="joboffer_separator" />
      <section className="JobOfferPage_section5">
        <Link to="/build">
          <button type="button"> Postuler!</button>
        </Link>
      </section>
    </div>
  );
}

export default JobOfferPage;

JobOfferPage.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      JobTitle: PropTypes.string.isRequired,
      Description: PropTypes.string,
      Location: PropTypes.string,
      Upload_Date: PropTypes.string,
      Contract_Type: PropTypes.string,
    })
  ).isRequired,
};
