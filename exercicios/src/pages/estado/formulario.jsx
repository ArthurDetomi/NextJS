import { useState } from "react";

export default function formulario() {
  const [valor, setValor] = useState("inicial");

  function alterarInput(e) {
    const value = e.target.value;
    setValor(value);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <span>{valor}</span>
      <input onChange={(e) => alterarInput(e)} type="text" value={valor} />
    </div>
  );
}
