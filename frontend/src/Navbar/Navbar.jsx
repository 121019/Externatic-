import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const links = [
    { path: "/", text: "Accueil" },
    { path: "/offres", text: "Offres d'emploi" },
    { path: "/espace", text: "Mon espace" },
    { path: "/contact", text: "Nous contacter" },
    { path: "/sinscrire", text: "Inscription" },
    { path: "/connexion", text: "Connexion" },
  ];

  return (
    <nav>
      <Link to="/">Accueil</Link>
      {links.map((link) => (
        <div key={link.text}>
          <Link to={link.path}>{link.text}</Link>
        </div>
      ))}
    </nav>
  );
}

export default Navbar;
