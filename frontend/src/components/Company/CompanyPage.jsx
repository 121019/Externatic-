import { useEffect, useState } from "react";
import "./CompanyPage.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

import { useUser } from "../../contexts/UserContext";

function CompanyPage({ toastOptions }) {
  const { user } = useUser();

  const [company, setCompany] = useState([]);
  const [jobOffer, setJobOffer] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [offerToDelete, setOfferToDelete] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/company`)
      .then((response) => response.json())
      .then((data) => setCompany(data))
      .catch((err) => {
        console.error(err);
        console.warn(company);
      });

    if (user) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/jobs/business/${user.id}`)
        .then((response) => response.json())
        .then((data) => setJobOffer(data))
        .catch((err) => {
          console.error(err);
          console.warn(jobOffer);
        });
    }
  }, []);

  const handledelete = ({ id, JobTitle }) => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/jobs/${id}`, {
      method: "delete",
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          setIsOpen(false);
          toast.warn(`annonce ${JobTitle} supprimée`, toastOptions);
        }
      })
      .catch((err) => {
        console.error(err);
        console.warn(jobOffer);
      })
      .finally(() => {
        window.location.reload();
      });
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const addOfferToDelete = (id, JobTitle) => {
    setIsOpen(true);
    setOfferToDelete({ id, JobTitle });
  };

  return (
    <div className="companyPage">
      {user && isOpen && (
        <div className="companyPage_popup_box">
          <div className="companyPage_box">
            <h3>Souhaitez-vous supprimer cette offre d'emploi ? </h3>
            <div className="popup_div_btn">
              <button
                className="popup_btn yes"
                type="button"
                onClick={() => handledelete(offerToDelete)}
              >
                Oui
              </button>
              <button
                className="popup_btn no"
                type="button"
                onClick={handleClose}
              >
                Non
              </button>
            </div>
          </div>
        </div>
      )}

      {user && user.role === "company" ? (
        <>
          <section className="companyPage_header">
            <h3>Espace Entreprise</h3>
          </section>
          <section className="companyPage_companyLogo">
            <img
              src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
              alt="logo entreprise connectée"
            />
            <h1>{user.name}</h1>
          </section>
          <section className="companyPage_navButton">
            <button type="submit">
              <a href="#myjoboffer">Mes offres d'emploi</a>
            </button>
            <button type="submit">
              <a href="#myapplication">Mes candidatures reçues</a>
            </button>
            <button type="submit">
              <a href="#mycurrentapplication">Candidatures à l'étude</a>
            </button>
          </section>
          <section className="companyPage_companyoffers" id="myjoboffer">
            <div id="companyPage_companyoffers_header">
              <h3> Offres d'emplois publiées :</h3>
              <Link to="/newoffer">
                <button type="button">+</button>
              </Link>
            </div>

            {jobOffer.map((offer) => (
              <div key={offer.id} className="companyOffers">
                <div>
                  <h3>{offer.JobTitle}</h3>
                </div>
                <div>
                  <p> {offer.Location}</p>
                </div>
                <div>
                  <p>{offer.Contract_Type}</p>
                </div>
                <div>
                  <p>{offer.category}</p>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => addOfferToDelete(offer.id, offer.JobTitle)}
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </section>
          <section className="companyPage_cvthèque">
            <Link to="/build" className="CompanyPage_link">
              <div>
                <h1>CVthèque</h1>
                <button type="submit">Click me !</button>
              </div>
            </Link>
          </section>
          <section className="companyPage_application" id="myapplication">
            <h3> Candidatures Reçues :</h3>
            <div>
              <p>
                Michel Dupont &nbsp;&nbsp;&nbsp;&nbsp;➞&nbsp;&nbsp;&nbsp;&nbsp;
                Développeur Front-end
              </p>
              <p> Publiée le 12/07/2023</p>
            </div>
            <div>
              <p>
                Michel Dupont &nbsp;&nbsp;&nbsp;&nbsp;➞&nbsp;&nbsp;&nbsp;&nbsp;
                Développeur Front-end
              </p>
              <p> Publiée le 12/07/2023</p>
            </div>
            <div>
              <p>
                Michel Dupont &nbsp;&nbsp;&nbsp;&nbsp;➞&nbsp;&nbsp;&nbsp;&nbsp;
                Développeur Front-end
              </p>
              <p> Publiée le 12/07/2023</p>
            </div>
            <div>
              <p>
                Michel Dupont &nbsp;&nbsp;&nbsp;&nbsp;➞&nbsp;&nbsp;&nbsp;&nbsp;
                Développeur Front-end
              </p>
              <p> Publiée le 12/07/2023</p>
            </div>
          </section>
          <section className="companyPage_history">
            <Link to="/build" className="CompanyPage_link">
              <div>
                <h1>Historique</h1>
                <button type="submit">Click me !</button>
              </div>
            </Link>
          </section>
          <section
            className="companyPage_currentApplication"
            id="mycurrentapplication"
          >
            <h3> Offres d'emplois publiées :</h3>
            <div>
              <p>
                Michel Dupont &nbsp;&nbsp;&nbsp;&nbsp;➞&nbsp;&nbsp;&nbsp;&nbsp;
                Développeur Front-end
              </p>
              <p> Publiée le 12/07/2023</p>
            </div>
            <div>
              <p>
                Michel Dupont &nbsp;&nbsp;&nbsp;&nbsp;➞&nbsp;&nbsp;&nbsp;&nbsp;
                Développeur Front-end
              </p>
              <p> Publiée le 12/07/2023</p>
            </div>
            <div>
              <p>
                Michel Dupont &nbsp;&nbsp;&nbsp;&nbsp;➞&nbsp;&nbsp;&nbsp;&nbsp;
                Développeur Front-end
              </p>
              <p> Publiée le 12/07/2023</p>
            </div>
            <div>
              <p>
                Michel Dupont &nbsp;&nbsp;&nbsp;&nbsp;➞&nbsp;&nbsp;&nbsp;&nbsp;
                Développeur Front-end
              </p>
              <p> Publiée le 12/07/2023</p>
            </div>
            <div>
              <p>
                Michel Dupont &nbsp;&nbsp;&nbsp;&nbsp;➞&nbsp;&nbsp;&nbsp;&nbsp;
                Développeur Front-end
              </p>
              <p> Publiée le 12/07/2023</p>
            </div>
            <div>
              <p>
                Michel Dupont &nbsp;&nbsp;&nbsp;&nbsp;➞&nbsp;&nbsp;&nbsp;&nbsp;
                Développeur Front-end
              </p>
              <p> Publiée le 12/07/2023</p>
            </div>
          </section>{" "}
        </>
      ) : (
        <div className="companyPage_unlogin">
          <p>Espace réservé aux entreprises</p>
          <p>Connectez-vous</p>
          <Link to="/companylogin">
            <button type="button">Connexion</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CompanyPage;

CompanyPage.propTypes = {
  toastOptions: PropTypes.shape({
    position: PropTypes.string,
    autoClose: PropTypes.number,
    hideProgressBar: PropTypes.bool,
    closeOnClick: PropTypes.bool,
    pauseOnHover: PropTypes.bool,
    draggable: PropTypes.bool,
    progress: PropTypes.number,
    theme: PropTypes.string,
  }).isRequired,
};
