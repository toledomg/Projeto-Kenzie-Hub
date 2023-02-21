import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";

import { ModalSection, ModalSectionTrash, FormEditTech } from "./style";

import { BtnDefault, BtnMedium } from "../../../style/Global/Buttons";
import SelectModalAdd from "../../../components/Main/Select/SelectModalAdd";

import { UserTechAddContext } from "../../../providers/UserTechAddContext";
import { ModalTechContext } from "./../../../providers/ModalTechContext";

function ModalEdit() {
  const { editTechProfile, deleteTechProfile, renderTech, techID } =
    useContext(UserTechAddContext);

  const { modalShowEdit } = useContext(ModalTechContext);
  console.log(renderTech);
  console.log(techID);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      // title: techID.title,
      // status: techID.status,
    },
  });

  const submit = (data) => {
    editTechProfile(data);
  };

  return (
    <>
      <ModalSection className="modalBox" role="dialog">
        <section className="containerModal">
          <section className=" divTitle">
            <p>Tecnologia Detalhes</p>
            <i
              className="material-symbols-outlined"
              onClick={() => modalShowEdit()}
            >
              close
            </i>
          </section>
          <FormEditTech onSubmit={handleSubmit(submit)}>
            <input type="text" {...register("title")} />

            <SelectModalAdd register={register} />
            <div className="buttonModal">
              <BtnDefault type="submit">Salvar Alterações</BtnDefault>
              <BtnMedium
                onClick={handleSubmit(deleteTechProfile)}
                type="submit"
              >
                Excluir
              </BtnMedium>
            </div>
          </FormEditTech>
        </section>
      </ModalSection>
    </>
  );
}

export default ModalEdit;
