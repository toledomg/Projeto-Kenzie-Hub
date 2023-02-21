import React, { useState, useContext } from "react";

import { UserTechContext } from "./../../../providers/UserTechContext";
import { ModalTechContext } from "./../../../providers/ModalTechContext";

import ModalEdit from "./../../../pages/Home/Modal/ModalEdit";

function RenderList() {
  const { renderTech } = useContext(UserTechContext);
  const { showModalEdit, setShowModalEdit, modalShowEdit } =
    useContext(ModalTechContext);

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      {renderTech.length !== 0 ? (
        renderTech.map((tech, index) => (
          <li key={index}>
            <p>{tech.title}</p>
            <section>
              <p>{tech.status}</p>
              <i
                onClick={() => modalShowEdit()}
                className="material-symbols-outlined"
              >
                delete
              </i>
            </section>
          </li>
        ))
      ) : (
        <section>
          <div>
            <h2>Seja Bem - Vindo</h2>
          </div>
          <div>
            <h3>Você ainda não cadastrou nenhuma tecnologia</h3>
          </div>
        </section>
      )}
      {showModalEdit && <ModalEdit setShowModalEdit={setShowModalEdit} />}
    </>
  );
}

export default RenderList;
