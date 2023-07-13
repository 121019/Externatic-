import React, { useEffect, useState } from "react";
import { useUser } from "../contexts/UserContext";

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
    <div>
      <h2>CV Renderer</h2>
      <object
        type="application/pdf"
        data={mypath}
        width="1000px"
        height="1000px"
        aria-label="PDF document"
      />
    </div>
  );
}

export default CvRender;
