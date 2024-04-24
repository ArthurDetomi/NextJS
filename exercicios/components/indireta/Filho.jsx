export default function Filho(props) {
  // "Passei no ENEM!"
  console.log(props);
  return (
    <div>
      <h1>Filho</h1>
      <button onClick={props.funcao()}>Falar com o pai #01</button>
      <button onClick={() => props.funcao("Passei no ENEM!")}>
        Falar com o pai #02
      </button>
    </div>
  );
}
