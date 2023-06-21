import React, { useEffect, useState } from "react";

function JobOffersBdd() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((response) => response.json())
      .then((data) => {
        setOffers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <h1>Liste des offres</h1>
      <ul>
        {offers.map((offer) => (
          <li key={offer.id}>{offer.Description}</li>
        ))}
      </ul>
    </div>
  );
}

export default JobOffersBdd;
