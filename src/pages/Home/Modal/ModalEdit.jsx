import React, { useState, useContext } from "react";

import Modal from "react-modal";
Modal.setAppElement("#root");
import { ModalSection, ModalSectionTrash, FormEditTech } from "./style";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import { BtnDefault } from "../../../style/Global/Buttons";
import SelectModalAdd from "../../../components/Main/Select/SelectModalAdd";
import { ModalEditSchema } from "../../../Validators/Schema";
import { UserTechAddContext } from "../../../providers/UserTechAddContext";
import InputDefer from "../../../components/Main/Form/InputDefer";
import InputCad from "../../../components/Main/Form/InputCad";

function ModalEdit() {
  const [modalIsOpen, setIsOpen] = useState(false);
  // console.log(ShowModalAdd);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const { addTechProfile, renderTech, setShowModalEdit } =
    useContext(UserTechAddContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ModalEditSchema),
  });

  // console.log(renderTech);

  return (
    <>
      <ModalSection>
        <div className="divTitle ">
          <p>Tecnologia Detalhes</p>
          <i
            className="material-symbols-outlined"
            onClick={() => setShowModalEdit(false)}
          >
            close
          </i>
        </div>
        <FormEditTech onSubmit={handleSubmit(addTechProfile)}>
          <InputDefer
            label="Tecnologia"
            type="text"
            id="title"
            placeholder="Atualize aqui sua tecnologia"
            {...register("title")}
          />
          {errors.title?.message}
          <SelectModalAdd register={register} />
          {errors.status?.message}

          <BtnDefault type="submit">Salvar Alterações</BtnDefault>
          <BtnDefault type="submit">Excluir</BtnDefault>
        </FormEditTech>
      </ModalSection>
    </>
  );
}

export default ModalEdit;
