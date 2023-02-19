import React from "react";
import { Link } from "react-router-dom";
import { HeaderHubDash, DivHeader } from "./styles";
function HeaderD({ exitPage }) {
  return (
    <>
      <HeaderHubDash>
        <span>Kenzie Hub</span>
        <Link onClick={exitPage} to="/home">
          Sair
        </Link>
      </HeaderHubDash>
      <DivHeader>
        <span>teste</span>
        <span className="sp2">teste2</span>
      </DivHeader>
    </>
  );
}

export default HeaderD;
