import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";

function CvRender() {
  const { userId } = useAuth();
  const [cvFileName, setCvFileName] = useState(null);
  console.warn("this is the user on Cvrender", { userId });

  useEffect(() => {
    const fetchCvFileName = async () => {
      try {
        const response = await axios.get(`/uploads/cvFileName/${userId}`);
        setCvFileName(response.data.cvFileName);
      } catch (error) {
        console.error("Error fetching CV file name:", error);
      }
    };

    fetchCvFileName();
  }, [userId]);

  return (
    <div>
      <h2>CV Renderer</h2>
      {cvFileName ? (
        <object
          type="application/pdf"
          data={`/uploads/${cvFileName}`}
          width="100%"
          height="500"
          aria-label={`CV for user ${userId}`}
        >
          If you're seeing this, please make sure you have a PDF plugin
          installed.
        </object>
      ) : (
        <p>Loading CV...</p>
      )}
    </div>
  );
}

export default CvRender;
