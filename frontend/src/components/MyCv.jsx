import { Link } from "react-router-dom";
import Upload from "./Upload";
import CvRender from "./CvRender";
import "./MyCv.css";
import { useUser } from "../contexts/UserContext";

function MyCv() {
  const { user } = useUser();

  return (
    <div>
      <div className="cv">
        <h3>Mon CV</h3>
      </div>
      {user === false ? (
        <div className="cvNonConnecte">
          <h3 className="cvNonConnecte-h3">
            <Link className="cvNonConnecte-h3-link" to="/connexion">
              Veuillez vous connecter
            </Link>
          </h3>
        </div>
      ) : (
        <div className="designMyCv">
          <Upload />
          <CvRender />
        </div>
      )}
    </div>
  );
}

export default MyCv;
