import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const links = [
    { id: 1, path: "/joboffers", text: "Offres d'emploi" },
    { id: 2, path: "/espace", text: "Mon espace" },
    { id: 3, path: "/contact", text: "Nous contacter" },
    { id: 4, path: "/sinscrire", text: "S'inscrire" },
    { id: 5, path: "/connexion", text: "Connexion" },
  ];

  return (
    <nav className="navbar_nav">
      <div className="navbar">
        <div className="links">
          <Link to="/">Accueil</Link>
          {links.map((link) => (
            <div key={link.id}>
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
