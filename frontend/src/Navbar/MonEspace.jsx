import { useState } from "react";

import CVUploadForm from "../components/Upload";

function MonEspace() {
  const [userId, setUserId] = useState(null);

  const handleLogin = (id) => {
    setUserId(id);
  };

  return (
    <div>
      <img src="../assets/1.jpg" alt="MonEspace" />
      <CVUploadForm userId={userId} handleLogin={handleLogin} />
    </div>
  );
}

export default MonEspace;
