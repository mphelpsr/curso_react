import { useState } from "react";

function Form() {

    function cadastrarUsuario(event) {
        event.preventDefault()
        console.log(`Dados do cadastro: ${name} - ${password}`);
        
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <h1>Meu cadadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name"></label>
                    <input type="text" id="name" name="name" placeholder="Digite seu nome... " 
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password"></label>
                    <input type="text" id="password" name="password" 
                    placeholder="Digite sua senha... " 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div>
                    <input type="submit" value="cadastrar" />
                </div>
            </form>
        </div>
    )
    
}

export default Form