import React from "react";

function SelectCreate() {
  return (
    <>
      <label htmlFor="selectModulo">Selecionar módulo</label>
      <select name="selectModulo">
        <option value="" selected>
          Selecionar módulo
        </option>
        <option id="m1" value="m1">
          M1
        </option>
        <option id="m2" value="m2">
          M2
        </option>
        <option id="m3" value="m3">
          M3
        </option>
        <option id="m4" value="m4">
          M4
        </option>
        <option id="m5" value="m5">
          M5
        </option>
        <option id="m6" value="m6">
          M6
        </option>
        <option id="m7" value="m7">
          M7
        </option>
        <option id="m8" value="m8">
          M8
        </option>
      </select>
    </>
  );
}

export default SelectCreate;
