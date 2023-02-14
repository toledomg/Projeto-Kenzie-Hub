import React, { useContext } from "react";
import { UserTechContext } from "./../../../providers/UserTechContext";

function RenderList() {
  const { user, setUser } = useContext(UserTechContext);
  console.log(user);
  return (
    <>
      {/* {user.techs.map((tech) => {
        console.log(tech.status);
        console.log(tech.title); */}
      <li>
        <p>teste</p>
        <section>
          <p>teste2</p>
          <i className="material-symbols-outlined">delete</i>
        </section>
      </li>
      {/* })} */}
    </>
  );
}

export default RenderList;
