import React from "react";
import { UseAuth } from "../../contexts/AuthContext";
import Cvupload from "../components/Upload";
import CvRender from "../components/CvRender";

function MonEspace() {
  const { token, userId } = UseAuth(); // Destructure the `userId` from the authentication context

  // Check if the user is authenticated
  if (!token) {
    // User is not authenticated, redirect to login or display message
    return <p>Please log in to access this page.</p>;
  }

  // User is authenticated, render the content
  return (
    <div>
      <Cvupload userId={userId} /> {/* Pass the `userId` as a prop */}
      <CvRender />
    </div>
  );
}

export default MonEspace;
