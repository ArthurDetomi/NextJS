import Titulo from "../../../components/Titulo";

export default function usandoTitulo() {
    return (
        <div>
            <Titulo
                principal="Pagina de Cadastro"
                secundario="Incluir, alterar e excluir coisas!"
                pequeno={true}
            />
            <Titulo
                principal="Pequeno igual a false"
                secundario="Incluir, alterar e excluir coisas!"
                pequeno={false}
            />
        </div>
    )
}