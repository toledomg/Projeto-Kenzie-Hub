import { createContext, useEffect, useState } from "react";
import { api } from "./../services/api";

export const UserTechContext = createContext({});

export const UserTechProvider = ({ children }) => {
  const [user, setUser] = useState();

  const token = JSON.parse(localStorage.getItem("@HubKenzieToken"));

  return (
    <UserTechContext.Provider value={(user, setUser)}>
      {children}
    </UserTechContext.Provider>
  );
};
