import { useState } from "react";
import { format, parseISO } from "date-fns";
import PropTypes from "prop-types";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Link } from "react-router-dom";

import "./JobOffers.css";

import loc from "../assets/loc.png";
import desc from "../assets/desc.png";

function JobOffers({ offers }) {
  const [formJob, setFormJob] = useState([]);
  const [formContractType, setFormContractType] = useState([]);
  const [formLoc, setFormLoc] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

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

  const ourJobs = offers
    .map((offer) => {
      return { label: offer.category, value: offer.category };
    })
    .filter(
      (option, index, self) =>
        index === self.findIndex((o) => o.value === option.value)
    );

  const ourContract = offers
    .map((offer) => {
      return { label: offer.Contract_Type, value: offer.Contract_Type };
    })
    .filter(
      (option, index, self) =>
        index === self.findIndex((o) => o.value === option.value)
    );

  const ourLocation = offers
    .map((offer) => {
      return { label: offer.Location, value: offer.Location };
    })
    .filter(
      (option, index, self) =>
        index === self.findIndex((o) => o.value === option.value)
    );

  const selectedOffers = offers.filter(
    (offer) =>
      (formContractType.length > 0 &&
        formContractType.map((f) => f.value).includes(offer.Contract_Type)) ||
      (formLoc.length > 0 &&
        formLoc.map((f) => f.label).includes(offer.Location)) ||
      (formJob.length > 0 &&
        formJob.map((f) => f.label).includes(offer.category)) ||
      (searchTerm &&
        offer.JobTitle.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="joboffer_content">
      <hr className="joboffer_separator" />

      <section className="searchBar_section">
        <form className="search-box">
          <input
            type="text"
            placeholder=" "
            className="input"
            onChange={handleSearch}
          />
          <button type="reset" onClick={() => setSearchTerm("")}>
            x
          </button>
        </form>
      </section>

      <section className="filter_section">
        <form className="filter_form">
          <Select
            options={ourJobs}
            theme={customTheme}
            components={makeAnimated()}
            className=""
            placeholder="choisis ton metier..."
            isSearchable
            isMulti
            autoFocus
            noOptionsMessage={() =>
              "⛔️ Aucun job ne correspond à la recherche "
            }
            onChange={setFormJob}
          />

          <Select
            options={ourContract}
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
          <Select
            options={ourLocation}
            theme={customTheme}
            components={makeAnimated()}
            className=""
            placeholder="choisis ta ville..."
            isSearchable
            isMulti
            autoFocus
            noOptionsMessage={() => "⛔️ Aucunes villes correspondantes "}
            onChange={setFormLoc}
          />
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
                  <Link to={`/jobofferpage/${offer.id}`}>
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
                  </Link>
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
