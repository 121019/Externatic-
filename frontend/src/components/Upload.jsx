import React, { useState } from "react";
import axios from "axios";
import "./Upload.css";

import { useUser } from "../contexts/UserContext";

function Cvupload() {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [isParagraphVisible, setIsParagraphVisible] = useState(false);
  const { user } = useUser();

  const toggleParagraph = () => {
    setIsParagraphVisible(!isParagraphVisible);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Check if a file is selected
      if (!file) {
        throw new Error("No file selected.");
      }

      // Check the file format
      if (file.type !== "application/pdf") {
        throw new Error("Invalid file format. Please upload a PDF file.");
      }

      const formData = new FormData();
      formData.append("myfile", file);

      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/candidats/cv/${user.id}`,
        formData
      );

      const { data } = response;
      console.warn(data);

      setUploadStatus("success");
    } catch (error) {
      console.error("Error uploading file from upload:", error);
      setUploadStatus("error");
    }
  };

  return (
    <div className="upload">
      <div className="whyDownloadCv">
        <button type="button" onClick={toggleParagraph}>
          Pourquoi télécharger son CV ?
        </button>
        {isParagraphVisible && (
          <div>
            <p>
              Il est recommandé de télécharger son CV pour que l'ensemble des
              recruteurs puissent le visualiser.
            </p>
            <p>
              Pensez à créer un CV lisible et sans faute d'orthographe, vous
              pouvez vous aider de <a href="https://www.canva.com/">CANVA </a>
              par exemple.
            </p>
          </div>
        )}
      </div>
      <div className="downloadCv">
        <form
          className="downloadCv-form"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <input type="file" name="myfile" onChange={handleFileChange} />
          <button type="submit">Envoyer</button>
        </form>
        {uploadStatus === "success" && <p>File uploaded successfully!</p>}
        {uploadStatus === "error" && <p>Error uploading file.</p>}
      </div>
    </div>
  );
}

export default Cvupload;
