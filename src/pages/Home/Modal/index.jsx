import React, { useState, useContext, forwardRef } from "react";
import { ModalSection, ModalSectionTrash, FormEditTech } from "./style";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import { BtnDefault } from "./../../../style/Global/Buttons";
import SelectModalEdit from "./../../../components/Main/Select/SelectModalEdit";
import { ModalEditSchema } from "./../../../Validators/Schema";
import { UserTechAddContext } from "./../../../providers/UserTechAddContext";
import InputDefer from "./../../../components/Main/Form/InputDefer";
import InputCad from "./../../../components/Main/Form/InputCad";

function ModalEdit({ setShowModalAdd }) {
  const { createTechProfile, onSubmitFunction } =
    useContext(UserTechAddContext);
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
        <div className="divTitle ">
          <p>Cadastrar Tecnologia</p>
          <i
            className="material-symbols-outlined"
            onClick={() => setShowModalAdd(false)}
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
          <SelectModalEdit register={register} />
          {errors.status?.message}

          <BtnDefault type="submit">Cadastrar Tecnologia</BtnDefault>
        </FormEditTech>
      </ModalSection>
    </>
  );
}

export default ModalEdit;
