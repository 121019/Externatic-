import React, { useState } from "react";

function CVUploadForm() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("cv", file);

    const response = await fetch("/uploadcv", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      // handle error
    }

    // handle success
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload CV</button>
    </form>
  );
}

export default CVUploadForm;
