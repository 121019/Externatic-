import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MonEspace.css";
import { useUser } from "../contexts/UserContext";

function MonEspace() {
  const { user, loginUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.role === "candidat") {
      navigate("/espace");
    } else if (user && user.justRegistered) {
      navigate("/espace");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (user && user.role === "company") {
      navigate("/companypage");
    } else if (user && user.justRegistered) {
      navigate("/espace");
    }
  }, [user, navigate, loginUser]);

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
                <p>Mes informations personnelles</p>
              </Link>

              <Link to="/mycv" className="espace_section-bulle">
                <p>Mon cv</p>
              </Link>
              <Link to="/build" className="espace_section-bulle">
                <p>Mes offres d'emploi</p>
              </Link>
              <Link to="/build" className="espace_section-bulle">
                <p>Mes candidatures</p>
              </Link>
              <Link to="/build" className="espace_section-bulle">
                <p>Paramètres</p>
              </Link>
              <Link to="/build" className="espace_section-bulle">
                <p>Supprimer mon compte</p>
              </Link>
            </div>
          </div>
        )
      )}
    </>
  );
}
export default MonEspace;
