import React from "react";
import { TechUl } from "./styles";

import RenderList from "./RenderList";

function RenderTech({ setShowModalAdd }) {
  return (
    <div>
      <TechUl>
        <RenderList setShowModalAdd={setShowModalAdd} />
      </TechUl>
    </div>
  );
}

export default RenderTech;
