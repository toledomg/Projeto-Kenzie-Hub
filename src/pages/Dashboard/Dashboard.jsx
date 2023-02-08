import React from "react";
import { Link } from "react-router-dom";
import { Nav, Section, SectionInfo } from "./styles";

function Dashboard() {
  return (
    <>
      <Nav>
        <div>
          <h1>Kenzie Hub</h1>
          <Link to="/home">Sair</Link>
        </div>
      </Nav>
      <Section>
        <div>
          <h1>Olá, Usuário </h1>
          <p>Primeiro módulo (Introdução ao Frontend)</p>
        </div>
        <SectionInfo>
          <div>
            <h1>Que pena! Estamos em desenvolvimento :(</h1>
            <p>
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </p>
          </div>
        </SectionInfo>
      </Section>
    </>
  );
}

export default Dashboard;
