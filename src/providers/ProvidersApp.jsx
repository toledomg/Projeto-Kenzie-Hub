import React from "react";
import { HomeLoginProvider } from "./HomeLoginContext";
import { FormLoginProvider } from "./FormLoginContext";
import { UserTechProvider } from "./UserTechContext";

const ProvidersApp = ({ children }) => {
  return (
    <>
      <UserTechProvider>
        <HomeLoginProvider>
          <FormLoginProvider>{children}</FormLoginProvider>
        </HomeLoginProvider>
      </UserTechProvider>
    </>
  );
};

export default ProvidersApp;
