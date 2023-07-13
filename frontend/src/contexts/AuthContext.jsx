import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [token, setToken] = useState(false);
  return (
    <AuthContext.Provider
      value={useMemo(() => ({
        token,
        setToken,
      }))}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);
