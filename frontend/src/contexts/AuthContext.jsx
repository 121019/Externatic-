import { createContext, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [token, setToken] = useState();

  console.error("AuthContextProvider - token:", token);

  const authValue = useMemo(() => {
    console.error("AuthContextProvider - useMemo - token:", token);
    return { token, setToken };
  }, [token, setToken]);

  console.error("AuthContextProvider - authValue:", authValue);

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => {
  const contextValue = useContext(AuthContext);
  console.error("useAuth - contextValue:", contextValue);
  return contextValue;
};
