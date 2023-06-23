import { format, parseISO } from "date-fns";
import PropTypes from "prop-types";

import "./JobOffers.css";
import { useState } from "react";
import loc from "../assets/loc.png";
import desc from "../assets/desc.png";

function JobOffers({ offers }) {
  const filterOption = ["Métier", "Lieu", "Distance", "Type de contrat"];
  const jobTitle = [
    "Développeur Web",
    "Web designer",
    "Product Owner",
    "Lead développeur",
  ];

  const [optionFilterClick, setOptionFilterClick] = useState(false);
  const handleFilterClick = () => {
    setOptionFilterClick(true);
  };

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
          {filterOption.map((value) => (
            <label
              htmlFor={value}
              key={value}
              className="filter_label"
              value={value}
            >
              <select name={value} id={value} className="filter_select">
                {jobTitle.map((title) => (
                  <option
                    key={title}
                    className={
                      optionFilterClick ? "filter_option" : "filter_option2"
                    }
                    onClick={handleFilterClick}
                  >
                    {value}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </form>
      </section>

      <section className="offers">
        <h1 className="offers_title">Nos Offres : </h1>
        <div className="offers_section">
          {offers.map((offer) => {
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
          })}
        </div>
      </section>
    </div>
  );
}

JobOffers.propTypes = {
  offers: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    JobTitle: PropTypes.string.isRequired,
    Description: PropTypes.string,
    Location: PropTypes.string,
    Upload_Date: PropTypes.string,
    Contract_Type: PropTypes.string,
  }).isRequired,
};

export default JobOffers;
