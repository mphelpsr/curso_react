function Saudacao({nome}) {

    function gerarSaudacao(algumNome){
        return `Olá, ${algumNome}, td bem?`
    }

    return(
        <>
        {
            nome ? (
                <p>{gerarSaudacao(nome)} </p>
            ) : (
                <p>Quem é você?</p>
            )
        }

        { nome && (<p>{gerarSaudacao(nome)} </p>)}

        </>

    )
}

export default Saudacao