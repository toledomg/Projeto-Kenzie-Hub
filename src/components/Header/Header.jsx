import React from "react";
import { Link } from "react-router-dom";
import { HeaderHubDash } from "../../pages/Dashboard/styles";

function HeaderD({ exitPage }) {
  return (
    <HeaderHubDash>
      <span>Kenzie Hub</span>
      <Link onClick={exitPage} to="/home">
        Sair
      </Link>
    </HeaderHubDash>
  );
}

export default HeaderD;
