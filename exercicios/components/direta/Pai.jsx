import Filho from "./Filho";

export default function Pai(props) {
  return (
    <div>
      {/* Referência direta */}
      <h1>Familia {props.familia}</h1>
      <Filho familia={props.familia} nome="Joao" />
      <Filho familia={props.familia} nome="Mauricio" />
      <Filho familia={props.familia} nome="Caio" />
      <Filho {...props} nome="Gabriel" />
    </div>
  );
}
