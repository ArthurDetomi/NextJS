export default function Titulo({ principal, secundario, pequeno }) {

    return (
        <>
            {!pequeno ? (
                <>
                    <h1>{principal}</h1>
                    <h2>{secundario}</h2>
                </>
            ) : (
                <>
                    <p>{principal}</p>
                    <p>{secundario}</p>
                </>
            )}
        </>
    )
}