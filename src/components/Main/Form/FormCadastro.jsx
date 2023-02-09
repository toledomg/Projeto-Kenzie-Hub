import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../../services/api";

import { toast } from "react-toastify";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { BtnDefault } from "../../../style/Global/Buttons";

import { FormCreate } from "./FomCreate";
import SelectCreate from "./../Select/SelectCreate";
import formSchema from "./../../Validators/Schema";

function FormCadastro({ navigate }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = async (data) => {
    console.log(data);
    try {
      const response = await api.post("users", data);
      console.log(response);
      navigate("/");
      toast.success("Cadastro realizado com sucesso");
    } catch (error) {
      console.error(error);
      toast.error("Algo deu errado");
    }
  };

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
      <label htmlFor="contact">Linkedin:</label>
      <input
        type="text"
        {...register("contact")}
        id="contact"
        placeholder="http://linkedin/in/user"
      />
      {errors.contact?.message}
      <SelectCreate register={register} />
      {errors.course_module?.message}

      <BtnDefault type="submit">Cadastrar</BtnDefault>
    </FormCreate>
  );
}

export default FormCadastro;
