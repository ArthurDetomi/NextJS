export default function SomentePar(props) {
  return props.numero % 2 == 0 && <h1>{props.numero}</h1>;
}
