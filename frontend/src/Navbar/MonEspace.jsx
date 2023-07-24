import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MonEspace.css";
import { useUser } from "../contexts/UserContext";

function MonEspace() {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.role === "company") {
      navigate("/companypage");
    }
  }, [user, navigate]);

  return (
    <>
      <div className="espace">
        <h3>Mon espace</h3>
      </div>
      {user === null ? (
        <div className="espaceNonConnecte">
          <h3 className="espaceNonConnecte-h3">
            <Link className="espaceNonConnecte-h3-link" to="/connexion">
              Veuillez vous connecter
            </Link>
          </h3>
        </div>
      ) : (
        user && (
          <div className="espacePersonalise">
            <h4 className="espace_nomcomplet-h4">
              {user.firstname} {user.lastname}
            </h4>
            <div className="espace_section">
              <Link to="/espace/profil" className="espace_section-bulle">
                <p>Mon profil</p>
              </Link>
              <p className="espace_section-bulle">Mon profil publique</p>
              <Link to="/mycv" className="espace_section-bulle">
                <p>Mon CV</p>
              </Link>
              <Link to="/build" className="espace_section-bulle">
                <p>Mes offres d'emploi</p>
              </Link>
              <Link to="/build" className="espace_section-bulle">
                <p>Mes candidatures</p>
              </Link>
              <Link to="/build" className="espace_section-bulle">
                <p>Paramètre</p>
              </Link>
            </div>
          </div>
        )
      )}
    </>
  );
}
export default MonEspace;
