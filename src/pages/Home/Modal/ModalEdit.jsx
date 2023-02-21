import React, { useState, useContext } from "react";

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
  const { editTechProfile, deleteTechProfile, renderTech, techID, setTechID } =
    useContext(UserTechAddContext);
  const { modalShowEdit } = useContext(ModalTechContext);
  console.log(renderTech);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: renderTech.title,
      status: renderTech.status,
    },
  });

  const submit = (data) => {
    editTechProfile(data, techID);
  };

  return (
    <>
      <ModalSection className="modalBox">
        {renderTech.map((tech) => {
          return console.log(tech.title);
        })}
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
            {console.log(techID)}

            <input
              type="text"
              value={renderTech.title}
              {...register("title")}
            />
            {/* <InputDefer
            label="Nome da Tecnologia"
            type="text"
            {...register("title")}
          /> */}

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
