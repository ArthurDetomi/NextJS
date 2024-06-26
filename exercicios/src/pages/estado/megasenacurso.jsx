import { useEffect, useState } from "react";

import { mega } from "../../../functions/mega";
import NumeroDisplay from "../../../components/NumeroDisplay";

export default function megasenacurso() {
  const [qtde, setQtde] = useState(6);
  const [numeros, setNumeros] = useState([]);

  useEffect(() => {
    setNumeros(mega());
  }, []);

  function renderNumeros() {
    return numeros.map((numero) => (
      <NumeroDisplay key={numero} numero={numero} />
    ));
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>MegaSena</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {renderNumeros()}
      </div>
      <div>
        <input
          type="number"
          min={6}
          max={20}
          value={qtde}
          onChange={(e) => setQtde(e.target.value)}
        />
        <button onClick={() => setNumeros(mega(qtde))}>Gerar Aposta</button>
      </div>
    </div>
  );
}
