import React, { useEffect, useState } from "react";
import { useUser } from "../contexts/UserContext";
import "./CvRender.css";

function CvRender() {
  const { user } = useUser();
  const [cvPath, setCvPath] = useState();

  useEffect(() => {
    const fetchCvPath = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/candidats/cv/${user.id}`
        );
        if (response.ok) {
          const path = await response.json();
          const updatedPath = path.cvPath.replace("./public", ""); // Remove the "public" prefix
          setCvPath(updatedPath);
        } else {
          throw new Error(`Request failed with status ${response.status}`);
        }
      } catch (error) {
        console.error("Error fetching CV path:", error);
      }
    };

    if (user.id) {
      fetchCvPath();
    }
  }, [user.id]);

  const mypath = `${import.meta.env.VITE_BACKEND_URL}${cvPath}`;

  return (
    <div className="cvRender">
      <object
        type="application/pdf"
        data={mypath}
        width="850em"
        height="1230em"
        aria-label="PDF document"
      />
      <div className="cvRender_lien">
        <a target="_blank" rel="noopener noreferrer" href={mypath}>
          Voir mon cv
        </a>
      </div>
    </div>
  );
}

export default CvRender;
