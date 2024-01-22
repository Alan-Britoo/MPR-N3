import React, { useState } from "react";
import "./inte.css";

export default function NavInteractive() {
  const [contadorAdultos, setcontadorAdultos] = useState(0);
  const [contadorChildren, setcontadorChildren] = useState(0);

  const RestarA = () => {
    if (contadorAdultos > 0) {
      setcontadorAdultos(contadorAdultos - 1);
    }
  };

  const SumarA = () => {
    setcontadorAdultos(contadorAdultos + 1);
  };

  const restarNiños = () => {
    if (contadorChildren > 0) {
      setcontadorChildren(contadorChildren - 1);
    }
  };

  const SumarNiños = () => {
    setcontadorChildren(contadorChildren + 1);
  };



  return (
    <div className="contenedor">
      <div className="contenedorAdultos">
        <p>
          <strong>Adults</strong>
        </p>
        <p className="edad">Ages 13 or above</p>
        <div className="marcador">
          <button type="button" onClick={RestarA}>-</button>
          <p className="NcontadorA">{contadorAdultos}</p>
          <button type="button" onClick={SumarA}>+</button>
        </div>
      </div>
      <div className="contenedorNiños">
        <p>
          <strong>Children</strong>
        </p>
        <p className="edad">Ages 2-12</p>
        <div className="marcador">
          <button type="button" onClick={restarNiños}>-</button>
          <p className="NcontadorA">{contadorChildren}</p>
          <button type="button" onClick={SumarNiños}>+</button>
        </div>
      </div>
    </div>
  );
}