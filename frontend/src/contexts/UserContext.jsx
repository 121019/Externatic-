import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    adress: "",
    postcode: "",
    city: "",
  });
  return (
    <UserContext.Provider
      value={useMemo(() => ({
        user,
        setUser,
      }))}
    >
      {children}
    </UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useUser = () => useContext(UserContext);
