import "./JobOffers.css";
import { useState } from "react";

function JobOffers() {
  const filterOption = ["Métier", "Lieu", "Distance", "Type de contrat"];
  const jobTitle = [
    "Développeur Web",
    "Web designer",
    "Product Owner",
    "Lead développeur",
  ];

  const offers = [
    {
      id: 1,
      title: "Développeur Web",
      location: "Lyon",
      desc: "Notre client est une société spécialisée dans l'edition de logiciel applicatif BtoB pour le monde de l'automobile. Pour renforcer leur équipe nantaise à taille humaine de 30 personnes au sein d'une cellule R&D, nous recherchons un Développeur...",
    },
    {
      id: 2,
      title: "Lead Dev",
      location: "Valence",
      desc: "Notre client est une société spécialisée dans l'edition de logiciel applicatif BtoB pour le monde de l'automobile. Pour renforcer leur équipe nantaise à taille humaine de 30 personnes au sein d'une cellule R&D, nous recherchons un Développeur...",
    },
    {
      id: 3,
      title: "Ingénieur Dev Ops",
      location: "Montpellier",
      desc: "Notre client est une société spécialisée dans l'edition de logiciel applicatif BtoB pour le monde de l'automobile. Pour renforcer leur équipe nantaise à taille humaine de 30 personnes au sein d'une cellule R&D, nous recherchons un Développeur...",
    },
    {
      id: 4,
      title: "Développeur PHP",
      location: "Grenoble",
      desc: "Notre client est une société spécialisée dans l'edition de logiciel applicatif BtoB pour le monde de l'automobile. Pour renforcer leur équipe nantaise à taille humaine de 30 personnes au sein d'une cellule R&D, nous recherchons un Développeur...",
    },
    {
      id: 5,
      title: "Développeur JS ",
      location: "Lyon",
      desc: "Notre client est une société spécialisée dans l'edition de logiciel applicatif BtoB pour le monde de l'automobile. Pour renforcer leur équipe nantaise à taille humaine de 30 personnes au sein d'une cellule R&D, nous recherchons un Développeur...",
    },
    {
      id: 6,
      title: "Développeur React",
      location: "Paris",
      desc: "Notre client est une société spécialisée dans l'edition de logiciel applicatif BtoB pour le monde de l'automobile. Pour renforcer leur équipe nantaise à taille humaine de 30 personnes au sein d'une cellule R&D, nous recherchons un Développeur...",
    },
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
            return (
              <div key={offer.id} className="offers_card">
                <h1>{offer.title}</h1>
                <h3>{offer.location}</h3>
                <p>{offer.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default JobOffers;
