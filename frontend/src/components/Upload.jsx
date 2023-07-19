import React, { useState } from "react";
import axios from "axios";

import { useUser } from "../contexts/UserContext";

function Cvupload() {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);
  const { user } = useUser();

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
    <div>
      <h2>Upload CV</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="file" name="myfile" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {uploadStatus === "success" && <p>File uploaded successfully!</p>}
      {uploadStatus === "error" && <p>Error uploading file.</p>}
    </div>
  );
}

export default Cvupload;
