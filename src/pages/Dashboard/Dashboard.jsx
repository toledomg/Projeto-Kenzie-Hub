import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Nav, Section, SectionInfo } from "./styles";

function Dashboard() {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = JSON.parse(localStorage.getItem("token"));
      try {
        const response = await api.get("profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadUser();
  }, []);

  const exitPage = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <Nav>
        <div>
          <h1>Kenzie Hub</h1>
          <Link onClick={exitPage} to="/home">
            Sair
          </Link>
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
