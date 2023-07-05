import { useState } from "react";
import { format, parseISO } from "date-fns";
import PropTypes from "prop-types";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import "./JobOffers.css";

import loc from "../assets/loc.png";
import desc from "../assets/desc.png";

function JobOffers({ offers }) {
  // const [optionFilterClick, setOptionFilterClick] = useState(false);
  const [formJob, setFormJob] = useState([]);
  const [formContractType, setFormContractType] = useState([]);
  const [formLoc, setFormLoc] = useState("");
  const [formDist, setFormDist] = useState(null);

  const formJobs = [
    { label: "Développeur de logiciels", value: "Développeur de logiciels" },
    {
      label: "Developpeur back-end",
      value: "Developpeur back-end",
    },
    { label: "Analyste de données", value: "Analyste de données" },
    { label: "Ingénieur DevOps", value: "Ingénieur DevOps" },
    { label: "Architecte cloud", value: "Architecte cloud" },
    {
      label: "Spécialiste en cybersécurité",
      value: "Spécialiste en cybersécurité",
    },
    {
      label: "Administrateur de systèmes",
      value: "Administrateur de systèmes",
    },
    { label: "Ingénieur en réseau", value: "Ingénieur en réseau" },
    { label: "Développeur web", value: "Développeur web" },
    {
      label: "Ingénieur machine learning",
      value: "Ingénieur machine learning",
    },
    {
      label: "Ingénieur en réalité virtuelle",
      value: "Ingénieur en réalité virtuelle",
    },
    {
      label: "Ingénieur en réalité augmentée",
      value: "Ingénieur en réalité augmentée",
    },
    {
      label: "Développeur d'applications mobiles",
      value: "Développeur d'applications mobiles",
    },
    {
      label: "Ingénieur en automatisation des processus (RPA)",
      value: "Ingénieur en automatisation des processus (RPA)",
    },
    { label: "Data scientist", value: "Data scientist" },
    { label: "Spécialiste en blockchain", value: "Spécialiste en blockchain" },
    {
      label: "Ingénieur en systèmes embarqués",
      value: "Ingénieur en systèmes embarqués",
    },
    {
      label: "Ingénieur en génie logiciel",
      value: "Ingénieur en génie logiciel",
    },
    { label: "Concepteur de jeux vidéo", value: "Concepteur de jeux vidéo" },
    { label: "Ingénieur en robotique", value: "Ingénieur en robotique" },
    {
      label: "Ingénieur en réalité mixte",
      value: "Ingénieur en réalité mixte",
    },
    {
      label: "Ingénieur en sécurité des données",
      value: "Ingénieur en sécurité des données",
    },
    {
      label: "Ingénieur en vision par ordinateur",
      value: "Ingénieur en vision par ordinateur",
    },
    {
      label: "Ingénieur en traitement du langage naturel",
      value: "Ingénieur en traitement du langage naturel",
    },
    {
      label: "Ingénieur en automatisation des tests",
      value: "Ingénieur en automatisation des tests",
    },
    {
      label: "Architecte de bases de données",
      value: "Architecte de bases de données",
    },
    {
      label: "Developpeur Front-end React  ",
      value: "Developpeur Front-end React  ",
    },
    {
      label: "Developpeur Back-end  ",
      value: "Developpeur Back-end  ",
    },
    {
      label: "Developpeur Front-end React  ",
      value: "Developpeur Front-end React  ",
    },
  ];
  const formContract = [
    { label: "CDI", value: "CDI" },
    { label: "CDD", value: "CDD" },
    { label: "Interim", value: "Interim" },
    { label: "Freelance", value: "Freelance" },
  ];

  const customTheme = (theme) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "#ca1f62",
        primary: "white",
      },
    };
  };
  // const handleFilterClick = () => {
  //   setOptionFilterClick(true);
  // };

  const selectedOffers = offers.filter(
    (offer) =>
      (formContractType.length > 0 &&
        formContractType.map((f) => f.value).includes(offer.Contract_Type)) ||
      (formLoc.length > 0 &&
        formLoc.map((f) => f.label).includes(offer.Location)) ||
      (formJob.length > 0 &&
        formJob.map((f) => f.label).includes(offer.JobTitle))
  );

  return (
    <div className="content">
      <hr className="separator" />

      <section className="searchBar_section">
        <form className="search-box">
          <input type="text" placeholder=" " className="input" />
          <button type="reset">x</button>
        </form>
      </section>

      <section className="filter_section">
        <form className="filter_form">
          <Select
            options={formJobs}
            theme={customTheme}
            components={makeAnimated()}
            className=""
            placeholder="choisis ton metier..."
            isSearchable
            isMulti
            autoFocus
            noOptionsMessage={() =>
              "⛔️ Aucuns jobs ne correspond à la recherche "
            }
            onChange={setFormJob}
          />

          <Select
            options={formContract}
            theme={customTheme}
            components={makeAnimated()}
            className=""
            placeholder="Type de contrat"
            isSearchable
            isMulti
            autoFocus
            noOptionsMessage={() => " ❌ Plus de contrat dispo! "}
            onChange={setFormContractType}
          />

          <div className="location">
            <input
              id="location"
              type="search"
              name="location"
              placeholder="localisation "
              value={formLoc}
              onChange={(e) => setFormLoc(e.target.value)}
            />

            <input
              type="range"
              name="distance"
              min="0"
              max="100"
              onChange={(e) => setFormDist(e.target.value)}
            />
            <label htmlFor="distance">Dans un rayon de : {formDist} km</label>
          </div>
        </form>
      </section>

      <section className="offers">
        <h1 className="offers_title">Nos Offres : </h1>
        <div className="offers_section">
          {(selectedOffers.length > 0 ? selectedOffers : offers).map(
            (offer) => {
              const date = parseISO(offer.Upload_Date);
              const formattedDate = format(date, "dd-MM-yyyy");
              return (
                <div key={offer.id} className="offers_card">
                  <h2>{offer.JobTitle}</h2>
                  <div className="offers_card-flex">
                    <div className="offers_card-flexgauche">
                      <img
                        src={desc}
                        className="offers_card-symbol offers_card-desc"
                        alt="description"
                      />
                      <p>{offer.Description}</p>
                    </div>
                    <div className="offers_card-flexdroite">
                      <img
                        src={loc}
                        className="offers_card-symbol offers_card-loc"
                        alt="localiser"
                      />
                      <p>{offer.Location}</p>
                      <p>Posté le {formattedDate}</p>
                      <p>{offer.Contract_Type}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </section>
    </div>
  );
}

JobOffers.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      JobTitle: PropTypes.string.isRequired,
      Description: PropTypes.string,
      Location: PropTypes.string,
      Upload_Date: PropTypes.string,
      Contract_Type: PropTypes.string,
    })
  ).isRequired,
};

export default JobOffers;
