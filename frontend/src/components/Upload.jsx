import React, { useState } from "react";
import axios from "axios";
import { UseAuth } from "../../contexts/AuthContext";

function Cvupload() {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);
  const { userId } = UseAuth();
  console.warn(`my user id : ${userId}`);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("myfile", file);
      console.warn(file);

      const response = await axios.post(
        "http://localhost:5080/myfile",
        formData
      );

      // Destructure the data property from the response object
      const { data } = response;
      console.warn("this is the response:", response);

      // File uploaded successfully
      setUploadStatus("success");

      // Update the CV path in the table
      const cvPath = data.filePath; // Modify this based on the response data structure
      const updatedCandidat = { cv: cvPath };

      await axios.put(
        `http://localhost:5080/candidats/cv/${userId}`,
        updatedCandidat
      );
      console.warn("upload userid console.log", { userId });
      // Table updated successfully
    } catch (error) {
      // Handle error
      console.error("Error uploading file:", error);
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
