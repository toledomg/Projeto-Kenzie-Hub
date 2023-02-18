import React, { useState, useContext } from "react";

import Modal from "react-modal";
Modal.setAppElement("#root");
import { ModalSection, ModalSectionTrash, FormEditTech } from "./style";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import { BtnDefault, BtnMedium } from "../../../style/Global/Buttons";
import SelectModalAdd from "../../../components/Main/Select/SelectModalAdd";
import { ModalEditSchema } from "../../../Validators/Schema";
import { UserTechAddContext } from "../../../providers/UserTechAddContext";
import InputDefer from "../../../components/Main/Form/InputDefer";
import { ModalTechContext } from "./../../../providers/ModalTechContext";

function ModalEdit() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const {
    showModalEdit,
    setShowModalEdit,
    showModalAdd,
    setShowModalAdd,
    modalShowAdd,
    modalShowEdit,
  } = useContext(ModalTechContext);

  const { addTechProfile, renderTech } = useContext(UserTechAddContext);
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
            onClick={() => modalShowEdit()}
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
          <div className="buttonModal">
            <BtnDefault type="submit">Salvar Alterações</BtnDefault>
            <BtnMedium type="submit">Excluir</BtnMedium>
          </div>
        </FormEditTech>
      </ModalSection>
    </>
  );
}

export default ModalEdit;
