import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { api } from "./../../../services/api";
import { toast } from "react-toastify";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { BtnDefault, BtnMedium } from "../../../style/Global/Buttons";

import { FormCreate } from "./FomCreate";

function FormLogin({ navigate }) {
  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatório"),
  });

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
      const response = await api.post("sessions", data);
      // console.log(response);
      // console.log(response.data.token);
      localStorage.setItem("@HubKenzie", JSON.stringify(response.data.token));
      navigate("/dashboard");
      toast.success("Login realizado com sucesso");
    } catch (error) {
      console.error(error);
      toast.error("Algo deu errado");
    }
  };

  return (
    <FormCreate onSubmit={handleSubmit(onSubmitFunction)}>
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
      <BtnDefault type="submit">Entrar</BtnDefault>
    </FormCreate>
  );
}

export default FormLogin;
