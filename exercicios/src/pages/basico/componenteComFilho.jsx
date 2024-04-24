import Item from "../../../components/Item";
import Lista from "../../../components/Lista";

export default function componenteComFilho() {
  return (
    <div>
      <Lista>
        {/*Filhos*/}
        <Item conteudo="Item #11" />
        <Item conteudo="Item #12" />
        <Item conteudo="Item #13" />
      </Lista>
    </div>
  );
}
