import React from "react";
import { BtnDefault } from "./../../../style/Global/Buttons";
import { FormCreate } from "./FomCreate";

function FormLogin() {
  return (
    <FormCreate>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Digite seu Email"
        helper="Email"
      />
      <label htmlFor="password">Senha</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Digite sua Senha"
        helper="Senha"
      />
      <BtnDefault>Entrar</BtnDefault>
    </FormCreate>
  );
}

export default FormLogin;
