export default function Repeticao1() {
  const listaAprovados = [
    "Joao",
    "Maria",
    "Ana",
    "Marcos",
    "Joao",
    "Izabela",
    "Mauricio",
    "Tobias",
  ];

  function renderizarLista() {
    return listaAprovados.map((nome, index) => (
      <li key={index}>
        {nome} #0{index + 1}
      </li>
    ));
  }

  return <ol>{renderizarLista()}</ol>;
}

/*
function renderizarLista() {
  const itens = [];

  for (let i = 0; i < listaAprovados.length; i++) {
    itens.push(
      <li key={i}>
        {listaAprovados[i]} #0{i + 1}
      </li>
    );
  }

  return itens;
}
*/
