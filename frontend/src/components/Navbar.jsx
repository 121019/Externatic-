import { useState } from "react";
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

  const [openMenu, setOpenMenu] = useState("false");

  const openMenuMobile = () => {
    setOpenMenu((value) => !value);
  };

  return (
    <div>
      <div
        className={
          openMenu ? "overlay_menu_mobile" : "overlay_menu_mobile open"
        }
      >
        {/* {" "} Intentionally left empty {" "} */}
      </div>
      <nav className="navbar_nav">
        <div
          className="navbar_burger"
          onClick={openMenuMobile}
          onKeyDown={(event) => {
            if (event.key === "'Enter' || event.key === ' '") {
              openMenuMobile();
            }
          }}
          role="button"
          tabIndex={0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <img
          className="logoExternatic"
          src={ExternaticLogoSansFond}
          alt="logo entreprise externatic"
        />
        <div className={openMenu ? "navbar" : "navbar open"}>
          <div
            className="navbar_burger_close"
            onClick={openMenuMobile}
            onKeyDown={(event) => {
              if (event.key === "'Enter' || event.key === ' '") {
                openMenuMobile();
              }
            }}
            role="button"
            tabIndex={0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
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
