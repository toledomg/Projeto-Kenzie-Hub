import React, { useState, useEffect } from "react";
import { api } from "./../../../services/api";
let Dados = [];
function RenderList() {
  const [renderTech, setRenderTech] = useState("");
  const [user, setUser] = useState("");

  const token = JSON.parse(localStorage.getItem("@HubKenzieToken"));

  useEffect(() => {
    async function listUser() {
      try {
        const response = await api.get("profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setRenderTech(response.data.techs);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    listUser();
  }, []);

  console.log(renderTech);
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
