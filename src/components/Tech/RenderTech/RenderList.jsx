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
      {renderTech.lenght !== 0 ? (
        renderTech.map((tech, index) => (
          <li>
            <p>{tech.title}</p>
            <section>
              <p>{tech.status}</p>
              <i className="material-symbols-outlined">delete</i>
            </section>
          </li>
        ))
      ) : (
        <h3>Você ainda não cadastrou nenhuma tecnologia</h3>
      )}
    </>
  );
}

export default RenderList;
