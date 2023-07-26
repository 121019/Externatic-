import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

import "./JobOfferPage.css";

function JobOfferPage({ offers }) {
  const { offerid } = useParams();
  const { user } = useUser();

  const offer = offers.filter((of) => of.id === parseInt(offerid, 10));
  const myOffer = offer[0];
  return (
    <div className="JobOfferPage">
      {user ? (
        <>
          <section className="JobOfferPage_section1">
            <h1>{myOffer.JobTitle}</h1>
          </section>
          <section className="JobOfferPage_section2">
            <div>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div>
              <h3>{myOffer.Location}</h3>
            </div>
          </section>

          <section className="JobOfferPage_section3">
            <div>
              <p>
                <strong>Salaire :</strong> 28k-35k brut
              </p>
              <p>
                <strong>Catégorie :</strong> {myOffer.category}
              </p>
              <p>
                <strong>Date de mise en ligne :</strong> {myOffer.Upload_Date}
              </p>
            </div>
          </section>
          <hr className="joboffer_separator" />
          <section className="JobOfferPage_section4">
            <div>
              <h2>Description :</h2>
              <p>{myOffer.Description}</p>
            </div>
          </section>
          <hr className="joboffer_separator" />
          <section className="JobOfferPage_section5">
            <Link to="/build">
              <button type="button">Postuler</button>
            </Link>
          </section>
        </>
      ) : (
        <div className="companyPage_unlogin">
          <p>Espace réservé aux Candidats connectés</p>
          <p>Connectez-vous</p>
          <Link to="/connexion">
            <button type="button">Connexion</button>
          </Link>
        </div>
      )}
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
