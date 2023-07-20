import { useEffect, useState } from "react";
import "./CompanyPage.css";
import { Link } from "react-router-dom";

import { useUser } from "../../contexts/UserContext";

function CompanyPage() {
  const { user } = useUser();
  const [company, setCompany] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/company`)
      .then((response) => response.json())
      .then((data) => setCompany(data))
      .catch((err) => {
        console.error(err);
        console.warn(company);
      });
  }, []);

  return (
    <div className="companyPage">
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
            <button type="submit">Mes offres d'emploi</button>
            <button type="submit">Mes candidatures reçues</button>
            <button type="submit">Candidatures à l'étude</button>
          </section>
          <section className="companyPage_companyoffers">
            <h3> Offres d'emplois publiées :</h3>
            <Link to="/newoffer">
              <button type="button">new</button>
            </Link>

            <div>
              <p>Développeur Front-end</p>
              <p> Publiée le 12/07/2023</p>{" "}
              <p>
                <img src="../assets/notif.png" alt="email icon" />
              </p>
            </div>
            <div>
              <p>Développeur Front-end</p>
              <p> Publiée le 12/07/2023</p>{" "}
              <p>
                <img src="../assets/notif.png" alt="email icon" />
              </p>
            </div>
            <div>
              <p>Développeur Front-end</p>
              <p> Publiée le 12/07/2023</p>{" "}
              <p>
                <img src="../assets/notif.png" alt="email icon" />
              </p>
            </div>
          </section>
          <section className="companyPage_cvthèque">
            <div>
              <h1>CVthèque</h1>
              <button type="submit">Click me!</button>
            </div>
          </section>
          <section className="companyPage_application">
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
            <div>
              <h1>Historique</h1>
              <button type="submit">Click me!</button>
            </div>
          </section>
          <section className="companyPage_currentApplication">
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
            <button type="button">Connection</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CompanyPage;
