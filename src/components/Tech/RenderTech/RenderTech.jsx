import React from "react";
import { TechUl } from "./styles";

import RenderList from "./RenderList";

function RenderTech() {
  return (
    <div>
      <TechUl>
        <RenderList />
      </TechUl>
    </div>
  );
}

export default RenderTech;
