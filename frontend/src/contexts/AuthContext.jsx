import React, { createContext, useState, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

  const value = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token, setToken]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
