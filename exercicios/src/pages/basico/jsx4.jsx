export default function jsx4() {
  const subtitulo = "Estou no JS!";
  
  return (
    <div>
      <h1>Integração JS e JSX</h1>
      <h2>{subtitulo}</h2>
      <h3>{3 * 3}</h3>
      <h4>{Math.max(13, 39)}</h4>
      <h5>{entre(5, 1, 10)}</h5>
    </div>
  );
}

function entre(valor, min, max) {
  return (valor >= min && valor <= max) ? 'Sim' : 'Não';
}