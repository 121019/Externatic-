import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ExternaticLogoSansFond from "../assets/ExternaticLogoSansFond.png";
import { useUser } from "../contexts/UserContext";
import "./Navbar.css";

function Navbar() {
  const { user, setUser } = useUser();
  const [openMenu, setOpenMenu] = useState("false");
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    fetch(`${import.meta.env.VITE_BACKEND_URL}/logout`);
    navigate("/");
  };

  const links = [
    { path: "/", text: "Accueil" },
    { path: "/joboffers", text: "Offres d'emploi" },
    { path: "/espace", text: "Mon espace" },
    { path: "/contact", text: "Nous contacter" },
  ];

  const openMenuMobile = () => {
    setOpenMenu((value) => !value);
  };

  return (
    <div>
      <div
        className={
          openMenu ? "overlay_menu_mobile" : "overlay_menu_mobile open"
        }
      />
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
        <Link to="/">
          <img
            className="logoExternatic"
            src={ExternaticLogoSansFond}
            alt="logo entreprise externatic"
          />
        </Link>

        <div className={openMenu ? "navbar" : "navbar open"}>
          <div className="links">
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
            {links.map((link) => (
              <div key={link.text}>
                <Link
                  to={link.path}
                  className="navbar_link"
                  onClick={openMenuMobile}
                >
                  {link.text}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="links_connexion">
          {user ? (
            <div className="navbar_deconnexion">
              <button
                type="button"
                onClick={handleLogout}
                className="connexion deconnexion_button"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0">
                    {/* {" "} Intentionally left empty {" "} */}
                  </g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/* {" "} Intentionally left empty {" "} */}
                  </g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M10 12H20M20 12L17 9M20 12L17 15"
                      stroke="#851342"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {/* {" "} Intentionally left empty {" "} */}
                    </path>{" "}
                    <path
                      d="M4 12C4 7.58172 7.58172 4 12 4M12 20C9.47362 20 7.22075 18.8289 5.75463 17"
                      stroke="#851342"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    >
                      {/* {" "} Intentionally left empty {" "} */}
                    </path>{" "}
                  </g>
                </svg>
                <span>se déconnecter</span>
              </button>
            </div>
          ) : (
            <>
              <Link to="/connexion" className="connexion">
                <p>Connexion</p>
                <div className="navbar_login_icon">
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
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </Link>
              <Link to="/Inscription" className="inscrire">
                <p>S'inscrire</p>
                <div className="navbar_registration_icon">
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
                      d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                    />
                  </svg>
                </div>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
