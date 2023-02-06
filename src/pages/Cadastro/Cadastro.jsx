import React from "react";
import { CadSection } from "./style/style";
import { BtnDefault, BtnMedium, BtnText } from "./../../style/Global/Buttons";
import FormCadastro from "./../../components/Main/Form/FormCadastro";

function Cadastro() {
  return (
    <CadSection>
      <section>
        <h1>Kenzie Hub</h1>
        <BtnText>Voltar</BtnText>
      </section>
      <div>
        <h1>Crie sua conta</h1>
        <span>Rápido e grátis, vamos nessa</span>
        <FormCadastro />
      </div>
    </CadSection>
  );
}

export default Cadastro;
