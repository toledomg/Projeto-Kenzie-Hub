import React from "react";
import { BtnDefault } from "../../../style/Global/Buttons";
import { FormCreate } from "./FomCreate";
import SelectCreate from "./../Select/SelectCreate";

function FormCadastro() {
  return (
    <FormCreate>
      <label htmlFor="name">Nome</label>
      <input
        type="name"
        name="name"
        id="name"
        placeholder="Digite aqui seu nome"
        helper="Nome"
      />
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
      <label htmlFor="password">Confirmar Senha</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Digite novamente sua Senha"
        helper="Senha"
      />
      <label htmlFor="bio">Bio</label>
      <input
        type="text"
        name="bio"
        id="bio"
        placeholder="Fale sobre você"
        helper="Bio"
      />
      <label htmlFor="contato">Opção de Contato</label>
      <input
        type="text"
        name="contato"
        id="contato"
        placeholder="Opção de contato"
        helper="Contato"
      />
      <SelectCreate />
      <BtnDefault>Cadastrar</BtnDefault>
    </FormCreate>
  );
}

export default FormCadastro;
