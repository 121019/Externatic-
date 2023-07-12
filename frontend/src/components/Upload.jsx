import React, { useState } from "react";
import axios from "axios";

import { useUser } from "../contexts/UserContext";

function Cvupload() {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);
  const { user } = useUser();
  console.warn(`my user id is from upload file : ${user.id}`);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("myfile", file);
      console.warn(file);

      const response = await axios.put(
        `http://localhost:5080/candidats/cv/${user.id}`,
        formData
      );
      console.warn(user.id);

      const { data } = response;
      console.warn("this is the response from upload:", data);

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
