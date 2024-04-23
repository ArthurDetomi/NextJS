import SomentePar from "../../../components/SomentePar";
import lista1 from "../basico/lista1";

export default function Condicional1() {
  function renderizarLista() {
    const lista = [];
    for (let i = 0; i < 10; i++) {
      lista.push(<SomentePar numero={i} />);
    }
    return lista;
  }

  return <>{renderizarLista()}</>;
}
