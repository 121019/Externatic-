import "./JobOffers.css";

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
      title: "Développeur Web",
      location: "Lyon",
      desc: "Notre client est une société spécialisée dans l'edition de logiciel applicatif BtoB pour le monde de l'automobile. Pour renforcer leur équipe nantaise à taille humaine de 30 personnes au sein d'une cellule R&D, nous recherchons un Développeur...",
    },
    {
      id: 3,
      title: "Développeur Web",
      location: "Lyon",
      desc: "Notre client est une société spécialisée dans l'edition de logiciel applicatif BtoB pour le monde de l'automobile. Pour renforcer leur équipe nantaise à taille humaine de 30 personnes au sein d'une cellule R&D, nous recherchons un Développeur...",
    },
    {
      id: 4,
      title: "Développeur Web",
      location: "Lyon",
      desc: "Notre client est une société spécialisée dans l'edition de logiciel applicatif BtoB pour le monde de l'automobile. Pour renforcer leur équipe nantaise à taille humaine de 30 personnes au sein d'une cellule R&D, nous recherchons un Développeur...",
    },
    {
      id: 5,
      title: "Développeur Web",
      location: "Lyon",
      desc: "Notre client est une société spécialisée dans l'edition de logiciel applicatif BtoB pour le monde de l'automobile. Pour renforcer leur équipe nantaise à taille humaine de 30 personnes au sein d'une cellule R&D, nous recherchons un Développeur...",
    },
    {
      id: 6,
      title: "Développeur Web",
      location: "Lyon",
      desc: "Notre client est une société spécialisée dans l'edition de logiciel applicatif BtoB pour le monde de l'automobile. Pour renforcer leur équipe nantaise à taille humaine de 30 personnes au sein d'une cellule R&D, nous recherchons un Développeur...",
    },
  ];

  return (
    <div className="content">
      <section className="searchBar_section">
        <form className="search-box">
          <input type="text" placeholder=" " className="input" />
          {/* eslint-disable jsx-a11y/no-static-element-interactions  */}
          <button type="button">x</button>
          {/* eslint-disable jsx-a11y/no-static-element-interactions  */}
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
                  <option key={title} className="filter_option">
                    {title}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </form>
      </section>

      <section className="offers">
        <h1 className="offers_title">Nos Offres</h1>
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
