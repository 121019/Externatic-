import React from "react";
import { Link } from "react-router-dom";
import ExternaticLogoSansFond from "../assets/ExternaticLogoSansFond.png";
import "./Navbar.css";

function Navbar() {
  const links = [
    { path: "/", text: "Accueil" },
    { path: "/joboffers", text: "Offres d'emploi" },
    { path: "/espace", text: "Mon espace" },
    { path: "/contact", text: "Nous contacter" },
  ];

  return (
    <div>
      <nav className="navbar_nav">
        <img
          className="logoExternatic"
          src={ExternaticLogoSansFond}
          alt="logo entreprise externatic"
        />
        <div className="navbar">
          <div className="links">
            {links.map((link) => (
              <div key={link.text}>
                <Link to={link.path} className="navbar_link">
                  {link.text}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="links_connexion">
          <Link to="/connexion" className="connexion">
            <p>Connexion</p>
          </Link>
          <Link to="/inscrire" className="inscrire">
            <p>S'inscrire</p>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
