import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

import { api } from "./../../../services/api";
import { toast } from "react-toastify";

import { BtnDefault, BtnMedium } from "../../../style/Global/Buttons";

import { FormCreate } from "./FomCreate";
import { FormLoginContext } from "./../../../providers/FormLoginContext";

function FormLogin({ navigate }) {
  const { register, handleSubmit, reset, errors } =
    useContext(FormLoginContext);

  const [isHidden, setIsHidden] = useState(true);

  const onSubmitFunction = async (data) => {
    try {
      const response = await api.post("sessions", data);

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
      <section className="verify_pass">
        <input
          type={isHidden ? "password" : "text"}
          {...register("password")}
          id="password"
          placeholder="Digite sua Senha"
        />
        <p>{errors.password?.message}</p>
        <span
          id="visibility"
          className="material-symbols-outlined"
          onClick={() => setIsHidden(!isHidden)}
        >
          {isHidden ? <MdVisibility /> : <MdVisibilityOff />}
        </span>
      </section>
      <BtnDefault type="submit">Entrar</BtnDefault>
    </FormCreate>
  );
}

export default FormLogin;
