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
  const { editTechProfile, renderTech, editingTech, setEditingTech } =
    useContext(UserTechAddContext);
  const { modalShowEdit } = useContext(ModalTechContext);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: renderTech.title,
      // status: editingTech.techs.content,
    },
  });
  console.log(renderTech);

  const submit = (data) => {
    editTechProfile(data, editingTech.id);
  };

  return (
    <>
      <ModalSection>
        <div className="divTitle">
          <p>Tecnologia Detalhes</p>
          <i
            className="material-symbols-outlined"
            onClick={() => modalShowEdit()}
          >
            close
          </i>
        </div>
        {...renderTech.map((tech) => (
          <FormEditTech key={tech.id} onSubmit={handleSubmit(submit)}>
            {console.log(tech.title)}
            <InputDefer
              disabled
              label="Tecnologia"
              type="text"
              {...register("title")}
            />

            <SelectModalAdd register={register} />
            <div className="buttonModal">
              <BtnDefault
                onClick={() => {
                  setEditingTech(renderTech);
                }}
                type="submit"
              >
                Salvar Alterações
              </BtnDefault>
              <BtnMedium type="submit">Excluir</BtnMedium>
            </div>
          </FormEditTech>
        ))}
      </ModalSection>
    </>
  );
}

export default ModalEdit;
