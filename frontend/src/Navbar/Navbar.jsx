import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const links = [
    { id: 1, path: "/offres", text: "Offres d'emploi" },
    { id: 2, path: "/espace", text: "Mon espace" },
    { id: 3, path: "/contact", text: "Nous contacter" },
  ];

  return (
    <nav>
      <div>
        <img src="logo.png" alt="Logo" />
      </div>
      <div>
        <Link to="/">Accueil</Link>
      </div>
      {links.map((link) => (
        <div key={link.id}>
          <Link to={link.path}>{link.text}</Link>
        </div>
      ))}
    </nav>
  );
}

export default Navbar;
