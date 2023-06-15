import React from "react";
import "./Footer.css";
import twitterlogo from "../assets/twitterlogo.png";
import instagramlogo from "../assets/instagramlogo.png";
import linkedInlogo from "../assets/linkedInlogo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="columns">
          <div className="column">
            <h4>Recrutement informatique</h4>
            <p>
              Externatic est un cabinet dédié au recrutement de <br /> profils
              d'experts, d'ingénieurs et de managers.
            </p>
          </div>
          <div className="column">
            <h4>Liens</h4>
            <ul>
              <a href="https://www.welcometothejungle.com/fr/companies/externatic/">
                <li>Recrutements internes</li>
              </a>
              <a href="https://www.externatic.fr/metiers">
                <li>Fiches métiers</li>
              </a>
              <a href="https://www.externatic.fr/mentions-legales">
                <li>Mentions légales</li>{" "}
              </a>
              <a href="https://www.externatic.fr/politique-de-confidentialite">
                <li>Politique de confidentialité</li>
              </a>
              <a href="https://www.externatic.fr/politique-de-cookies">
                <li>Politique de cookies</li>
              </a>
            </ul>
          </div>
          <div className="column">
            <h4>Contact</h4>
            <p>
              Mail : contact@externatic.fr
              <br />
              Adresse : 1 rue Racine
              <br />
              44000 NANTES - France
            </p>
          </div>
          <div className="column">
            <h4>Réseaux sociaux</h4>
            <div className="social-icons">
              <a href="https://fr.linkedin.com/company/externatic">
                <img
                  className="social-icon"
                  src={linkedInlogo}
                  alt="LinkedIn"
                />
              </a>
              <a href="https://twitter.com/Externatic">
                <img className="social-icon" src={twitterlogo} alt="Twitter" />
              </a>
              <a href=" https://www.instagram.com/externatic/">
                <img
                  className="social-icon"
                  src={instagramlogo}
                  alt="Instagram"
                />
              </a>
            </div>
          </div>
        </div>
        <h5>Externatic © 2023 - Tous droits réservés</h5>
      </footer>
    </>
  );
};

export default Footer;
