import { useState } from "react";
import NumeroDisplay from "../../../components/NumeroDisplay";

export default function megasena() {
  const QTD_MINIMA_APOSTA = 6;
  const QTD_MAXIMA_APOSTA = 20;

  const [qtdNumeros, setQtdNumeros] = useState(QTD_MINIMA_APOSTA);
  const [apostaAleatoria, setApostaAleatoria] = useState([]);

  function gerarNovosNumerosAleatorios() {
    const array = [];
    for (let i = 0; i < qtdNumeros; i++) {
      const randomNumber = getRandomArbitrary(1, 60);
      let set = new Set(array);
      if (set.has(randomNumber)) {
        i--;
      } else {
        array.push(randomNumber);
      }
    }
    return array;
  }

  function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
  }

  const handleChange = (e) => {
    const valor = parseInt(e.target.value);
    if (valor >= QTD_MINIMA_APOSTA && valor <= QTD_MAXIMA_APOSTA) {
      setQtdNumeros(valor);
    } else {
      setQtdNumeros(QTD_MINIMA_APOSTA);
    }
  };

  return (
    <div>
      <h1>MegaSena</h1>

      {apostaAleatoria.map((value) => (
        <NumeroDisplay key={value} numero={value} />
      ))}

      <button onClick={() => setApostaAleatoria(gerarNovosNumerosAleatorios())}>
        Gerar aposta aleátoria
      </button>
      <input
        onChange={(e) => handleChange(e)}
        type="number"
        value={qtdNumeros}
        min={QTD_MINIMA_APOSTA}
        max={QTD_MAXIMA_APOSTA}
      />
    </div>
  );
}
