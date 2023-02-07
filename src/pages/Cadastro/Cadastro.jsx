import React from "react";
import { useNavigate } from "react-router-dom";

import { CadSection } from "./style/style";
import { BtnDefault, BtnMedium, BtnText } from "./../../style/Global/Buttons";
import FormCadastro from "./../../components/Main/Form/FormCadastro";

function Cadastro() {
  const navigate = useNavigate();

  const backPage = () => navigate(-1);

  return (
    <CadSection>
      <section>
        <h1>Kenzie Hub</h1>
        <BtnText onClick={backPage}>Voltar</BtnText>
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
