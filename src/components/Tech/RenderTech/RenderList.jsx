import React, { useState, useContext } from "react";

import { UserTechContext } from "./../../../providers/UserTechContext";
import { ModalTechContext } from "./../../../providers/ModalTechContext";

import Modal from "react-modal";
// import ModalAdd from "./../../../pages/Home/Modal/ModalAdd";
import ModalEdit from "./../../../pages/Home/Modal/ModalEdit";
Modal.setAppElement("#root");

function RenderList({ setShowModalAdd }) {
  const { renderTech } = useContext(UserTechContext);

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <ModalEdit setShowModalAdd={setShowModalAdd} />;
      </Modal>
      {renderTech.length !== 0 ? (
        renderTech.map((tech, index) => (
          <li key={index}>
            <p>{tech.title}</p>
            <section>
              <p>{tech.status}</p>
              <i onClick={openModal} className="material-symbols-outlined">
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
    </>
  );
}

export default RenderList;
