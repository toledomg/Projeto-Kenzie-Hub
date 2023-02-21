import React, { useState, useContext, forwardRef } from "react";
import { ModalSection, FormEditTech } from "./style";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import { BtnDefault } from "../../../style/Global/Buttons";
import SelectModalAdd from "../../../components/Main/Select/SelectModalAdd";

import { ModalEditSchema } from "../../../Validators/Schema";
import { UserTechAddContext } from "../../../providers/UserTechAddContext";
import InputDefer from "../../../components/Main/Form/InputDefer";
import { ModalTechContext } from "./../../../providers/ModalTechContext";

function ModalAdd() {
  const { createTechProfile } = useContext(UserTechAddContext);
  const { modalShowAdd } = useContext(ModalTechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ModalEditSchema),
  });

  return (
    <>
      <ModalSection>
        <section className="containerModal">
          <div className="divTitle ">
            <p>Cadastrar Tecnologia</p>
            <i
              className="material-symbols-outlined"
              onClick={() => modalShowAdd()}
            >
              close
            </i>
          </div>
          <FormEditTech onSubmit={handleSubmit(createTechProfile)}>
            <InputDefer
              label="Tecnologia"
              type="text"
              id="title"
              placeholder="Digite aqui sua tecnologia"
              {...register("title")}
            />
            {errors.title?.message}
            <SelectModalAdd register={register} />
            {errors.status?.message}

            <BtnDefault type="submit">Cadastrar Tecnologia</BtnDefault>
          </FormEditTech>
        </section>
      </ModalSection>
    </>
  );
}

export default ModalAdd;
