import { createContext, useContext, useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [token, setToken] = useState(() => {
    return localStorage.getItem("auth_token") || false;
  });

  useEffect(() => {
    // Vérifie si un token est présent dans le local storage lors du chargement de l'application
    const storedToken = localStorage.getItem("auth_token");
    if (storedToken) {
      setToken(storedToken); // Parsez le token avant de le stocker dans le state
    }
  }, []);

  return (
    <AuthContext.Provider
      value={useMemo(
        () => ({
          token,
          setToken,
        }),
        [token, setToken]
      )}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);
