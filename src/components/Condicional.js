import { useState } from "react";


function Condicional() {

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
        console.log("Enviando infos...");
        
    }

    function limparEmail(e) {
        e.preventDefault()
        setUserEmail("")
        console.log("Limpando infos...");
        
    }

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    return(
        <>
        <h2>Cadastre seu e-mail</h2>

        <form>
            < input type = "email"
            placeholder = "Digite seu e-mail..."
            onChange = {
                (e) => setEmail(e.target.value)
            }
            />
            
            <button type="submit" onClick={enviarEmail}>
                enviar e-mail
            </button>
            {userEmail && (
                <>
                    <p>O email do usuário é: {userEmail} </p>
                    <button onClick={limparEmail}>Limpar e-mail</button>
                </>
            )
            }
        </form>
        </>
    )
    
}

export default Condicional