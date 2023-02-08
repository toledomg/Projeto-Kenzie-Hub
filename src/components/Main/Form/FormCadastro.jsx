import React from "react";
import { Link } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { BtnDefault, BtnMedium, BtnText } from "../../../style/Global/Buttons";

import { FormCreate } from "./FomCreate";
import SelectCreate from "./../Select/SelectCreate";

function FormCadastro({ navigate }) {
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório."),

    email: yup
      .string()
      .required("E-mail é obrigatório.")
      .email("E-mail inválido."),

    password: yup.string().required("Senha é obrigatório."),

    passwordConfirm: yup
      .string()
      .required("Confirmar a senha é obrigatório.")
      .oneOf([yup.ref("password")], "Senhas não são iguais."),

    bio: yup.string().required("Bio é obrigatório."),

    contato: yup.string().required("Contato é obrigatório."),

    modulo: yup.string().required("Selecione 1 modulo por favor."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => console.log(data);

  const handleEvent = (event) => {
    event.preventDefault();

    navigate("/home");
  };

  return (
    <FormCreate onSubmit={handleSubmit(onSubmitFunction)}>
      <label htmlFor="name">Nome</label>
      <input
        type="name"
        {...register("name")}
        id="name"
        placeholder="Digite aqui seu nome"
      />
      {errors.name?.message}
      <label htmlFor="email">Email</label>
      <input
        type="email"
        {...register("email")}
        id="email"
        placeholder="Digite seu Email"
      />
      {errors.email?.message}
      <label htmlFor="password">Senha</label>
      <input
        type="password"
        {...register("password")}
        id="password"
        placeholder="Digite sua Senha"
      />
      {errors.password?.message}

      <label htmlFor="passwordConfirm">Confirmar Senha</label>
      <input
        type="password"
        {...register("passwordConfirm")}
        id="passwordConfirm"
        placeholder="Digite novamente sua Senha"
      />
      {errors.passwordConfirm?.message}
      <label htmlFor="bio">Bio</label>
      <input
        type="text"
        {...register("bio")}
        id="bio"
        placeholder="Fale sobre você"
      />
      {errors.bio?.message}
      <label htmlFor="contato">Opção de Contato</label>
      <input
        type="text"
        {...register("contato")}
        id="contato"
        placeholder="Opção de contato"
      />
      {errors.contato?.message}
      <SelectCreate register={register} />
      {errors.modulo?.message}

      <BtnDefault type="submit">Cadastrar</BtnDefault>
      {/* <Link to="/home">Cadastrar</Link> */}
    </FormCreate>
  );
}

export default FormCadastro;
