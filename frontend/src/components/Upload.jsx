import React, { useState } from "react";
import axios from "axios";

function Cvupload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("myfile", file);

      await axios.post("http://localhost:5080/myfile", formData);

      // File uploaded successfully
    } catch (error) {
      // Handle error
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <h2>Upload CV</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="file" name="myfile" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default Cvupload;
