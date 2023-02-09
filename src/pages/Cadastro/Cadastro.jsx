import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { CadSection } from "./style";
import FormCadastro from "./../../components/Main/Form/FormCadastro";

function Cadastro() {
  const navigate = useNavigate();

  // const backPage = () => navigate(-1);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@HubKenzieToken"));
    if (token) {
      navigate("/");
    }
  }, []);

  return (
    <CadSection>
      <section>
        <h1>Kenzie Hub</h1>
        <Link to="/home">Voltar</Link>
      </section>
      <div>
        <h1>Crie sua conta</h1>
        <span>Rápido e grátis, vamos nessa</span>
        <FormCadastro navigate={navigate} />
      </div>
    </CadSection>
  );
}

export default Cadastro;
