import React from "react";
import { TechUl } from "./styles";

import trashImg from "/src/assets/img/trash.svg";
import RenderList from "./RenderList";

function RenderTech() {
  return (
    <TechUl>
      <RenderList />
    </TechUl>
  );
}

export default RenderTech;
