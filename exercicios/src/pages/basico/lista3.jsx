function gerarLista(tam) {
    let lista = [];

    for (let i = 1; i <= tam; i++) {
        lista.push(<span>{i},</span>);
    }

    return lista;
}

export default function lista1() {
 

    return (
        <div>
            {
               gerarLista(10)
            }
        </div>
    );
}
