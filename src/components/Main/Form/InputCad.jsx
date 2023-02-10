import React from "react";
import InputDefer from "./InputDefer";

function InputCad({ register, errors }) {
  return (
    <>
      <InputDefer
        label="Nome"
        type="text"
        id="name"
        placeholder="Digite aqui seu Nome"
        {...register("name")}
        error={errors.name?.message}
      />

      <InputDefer
        label="Email"
        type="email"
        id="email"
        placeholder="Digite seu Email"
        {...register("email")}
        error={errors.email?.message}
      />

      <InputDefer
        label="Senha"
        type="password"
        id="password"
        placeholder="Digite sua Senha"
        {...register("password")}
        error={errors.password?.message}
      />

      <InputDefer
        label="Confirmar Senha"
        type="password"
        id="passwordConfirm"
        placeholder="Digite novamente sua Senha"
        {...register("passwordConfirm")}
        error={errors.passwordConfirm?.message}
      />

      <InputDefer
        label="Bio"
        type="text"
        id="bio"
        placeholder="Fale sobre você"
        {...register("bio")}
        error={errors.bio?.message}
      />

      <InputDefer
        label="Linkedin:"
        type="text"
        id="contact"
        placeholder="http://linkedin/in/user"
        {...register("contact")}
        error={errors.contact?.message}
      />
    </>
  );
}

export default InputCad;
