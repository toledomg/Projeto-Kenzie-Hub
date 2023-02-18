import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Nav, Section, SectionInfo } from "./styles";
import { api } from "../../services/api";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import { BtnAdd } from "../../style/Global/Buttons";
import RenderTech from "./../../components/Tech/RenderTech/RenderTech";

import spinner from "../../assets/img/spinner.svg";

import ModalAdd from "../Home/Modal/ModalAdd";
import { ModalTechContext } from "./../../providers/ModalTechContext";

let Name = [];
let Modulo = [];

function Dashboard() {
  const {
    showModalEdit,
    setShowModalEdit,
    showModalAdd,
    setShowModalAdd,
    modalShowAdd,
    modalShowEdit,
  } = useContext(ModalTechContext);

  console.log(showModalEdit);

  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("@HubKenzieToken"));
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

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
        setLoading(true);
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
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, []);

  const exitPage = () => {
    localStorage.removeItem("@HubKenzieToken");
    localStorage.removeItem("@HubKenzieID");
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
          <Header exitPage={exitPage} />
        </Nav>
        {showModalAdd === true ? (
          <ModalAdd setShowModalAdd={setShowModalAdd} />
        ) : (
          ""
        )}
        <Section>
          <div>
            <h1>Olá, {Name}.</h1>
            <p>{Modulo}</p>
          </div>

          <SectionInfo>
            <div>
              <h2>Tecnologias</h2>
              <BtnAdd onClick={() => modalShowAdd()}>+</BtnAdd>
            </div>
            {loading ? (
              <>
                <div className="loading">
                  <p>Carregando</p>
                  <img src={spinner} />
                </div>
              </>
            ) : (
              <RenderTech
                setShowModalAdd={setShowModalAdd}
                setShowModalEdit={setShowModalEdit}
              />
            )}
          </SectionInfo>
        </Section>
      </motion.div>
    </>
  );
}

export default Dashboard;
