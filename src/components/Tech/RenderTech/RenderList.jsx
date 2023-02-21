import React, { useState, useContext } from "react";

import { UserTechContext } from "./../../../providers/UserTechContext";
import { ModalTechContext } from "./../../../providers/ModalTechContext";

function RenderList() {
  const { renderTech } = useContext(UserTechContext);
  const { modalShowEdit } = useContext(ModalTechContext);

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
    </>
  );
}

export default RenderList;
