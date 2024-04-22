import style from "../styles/Linha.module.css";
import Subdivisao from "./Subdivisao";

export default function Linha(props) {
  const comecaPreto = props.comecaPreto;

  function criarArray(tam) {
    let currentValue = comecaPreto ? true : false;
    const array = [];
    for (let i = 0; i < tam; i++) {
      array.push(currentValue);
      currentValue = !currentValue;
    }
    return array;
  }

  const quadrados = criarArray(8);

  return (
    <div className={style.linha}>
      {quadrados.map((value) => (
        <Subdivisao preta={value ? true : undefined} />
      ))}
    </div>
  );
}
