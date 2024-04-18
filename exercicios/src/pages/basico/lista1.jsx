export default function lista1() {
    function createLista(tam) {
        let lista = [];

        for (let i = 0; i < tam; i++) {
            lista.push(i + ",");
        }

        return lista;
    }

    const lista = createLista(10);

    return (
        <div>
            {
                lista.map((value, index) => (
                    <span key={index}>{value}</span>
                ))
            }
        </div>
    );
}
