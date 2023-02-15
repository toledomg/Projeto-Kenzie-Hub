import React, { useContext } from "react";

import { UserTechContext } from "./../../../providers/UserTechContext";

function RenderList() {
  const { renderTech } = useContext(UserTechContext);

  return (
    <>
      {renderTech.length !== 0 ? (
        renderTech.map((tech, index) => (
          <li key={index}>
            <p>{tech.title}</p>
            <section>
              <p>{tech.status}</p>
              <i className="material-symbols-outlined">delete</i>
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
