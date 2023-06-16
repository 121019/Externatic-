import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const links = [
    { path: "/", text: "Accueil" },
    { path: "/joboffers", text: "Offres d'emploi" },
    { path: "/espace", text: "Mon espace" },
    { path: "/contact", text: "Nous contacter" },
    { path: "/inscrire", text: "S'inscrire" },
    { path: "/connexion", text: "Connexion" },
  ];

  return (
    <nav className="navbar_nav">
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
    </nav>
  );
}

export default Navbar;
