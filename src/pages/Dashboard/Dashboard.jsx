import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Nav, Section, SectionInfo } from "./styles";
import { api } from "../../services/api";
import { motion } from "framer-motion";

let Name = [];
let Modulo = [];

function Dashboard() {
  const token = JSON.parse(localStorage.getItem("@HubKenzieToken"));
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@HubKenzieToken"));
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    async function loadUser() {
      try {
        const response = await api.get("profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
        Modulo = response.data.course_module;
        Name =
          response.data.name[0].toUpperCase() + response.data.name.substr(1);
      } catch (error) {
        console.error(error);
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ opacity: 1 }}
      >
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
            <h1>Olá, {Name}.</h1>
            <p>{Modulo}</p>
          </div>
          <SectionInfo>
            <div>
              <h1>Que pena! Estamos em desenvolvimento :</h1>
              <p>
                Nossa aplicação está em desenvolvimento, em breve teremos
                novidades
              </p>
            </div>
          </SectionInfo>
        </Section>
      </motion.div>
    </>
  );
}

export default Dashboard;
