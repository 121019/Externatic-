import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    firstname: "julien",
    lastname: "ladreyt",
    phone: "0600",
    email: "julien.lad@co.fr",
    adress: "1 rue test sur test",
    postcode: "26500",
    city: "bourg les valence",
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
