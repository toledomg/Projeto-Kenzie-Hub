import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { api } from "./../../../services/api";
import { toast } from "react-toastify";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { BtnDefault, BtnMedium } from "../../../style/Global/Buttons";

import { FormCreate } from "./FomCreate";
import { loginSchema } from "./../../Validators/Schema";

function FormLogin({ navigate }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmitFunction = async (data) => {
    // console.log(data);

    try {
      const response = await api.post("sessions", data);
      console.log(response.data);
      console.log(response.data.user.id);
      localStorage.setItem(
        "@HubKenzieToken",
        JSON.stringify(response.data.token)
      );
      localStorage.setItem(
        "@HubKenzieID",
        JSON.stringify(response.data.user.id)
      );
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
