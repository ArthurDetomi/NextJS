import Linha from "./Linha";

export default function Tabuleiro() {
  function criarArray(tam) {
    let currentValue = false;
    const array = [];
    for (let i = 0; i < tam; i++) {
      array.push(currentValue);
      currentValue = !currentValue;
    }
    return array;
  }

  const quadrados = criarArray(8);

  return (
    <>
      {quadrados.map((value) => (
        <Linha comecaPreto={value} />
      ))}
    </>
  );
}
