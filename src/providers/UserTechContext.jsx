import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const UserTechContext = createContext({});

export const UserTechProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [renderTech, setRenderTech] = useState("");

  const token = JSON.parse(localStorage.getItem("@HubKenzieToken"));

  useEffect(() => {
    async function listUser() {
      try {
        const response = await api.get("profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setRenderTech(response.data.techs);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    listUser();
  }, []);

  return (
    <UserTechContext.Provider
      value={{
        user,
        setUser,
        renderTech,
        setRenderTech,
      }}
    >
      {children}
    </UserTechContext.Provider>
  );
};
