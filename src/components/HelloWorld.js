import Frase from "./Frase"

function HelloWorld() {

    const name = "Marcelo"

    return (

        <>
            <h1>Ola React.js</h1>

            <Frase />

            <p> Eu sou o {name}, prazer!</p>
        </>

    )

}

export default HelloWorld