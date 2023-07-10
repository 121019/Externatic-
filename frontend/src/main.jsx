import React from "react";
import ReactDOM from "react-dom/client";
import { AuthContextProvider } from "./contexts/AuthContext";
import { UserContextProvider } from "./contexts/UserContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
