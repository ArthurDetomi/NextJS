export default function Estilo(props) {
  return (
    <div>
      <h1
        style={{
          backgroundColor: props.numero > 0 ? "green" : "red",
          color: "#fff",
        }}
      >
        Texto
      </h1>
    </div>
  );
}
