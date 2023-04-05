import React, { useState } from 'react'

// Definiendo estilos en constantes:
// Estilo cuando el usuario esta logueado.
const loggedStyle = {
    color: "white"
}

//Estilo cuando el usuario no esta logueado.
const unLoggedStyle = {
    color: "tomato",
    fontWeight: "bold"
}

export const GreetingSyled = (props) => {

    // Generamos un estado para el componente
    // y asi controlar si el usuario esta o no logueado.
    const [logged, setLogged] = useState(false)

    return (
        <div style={logged ? loggedStyle : unLoggedStyle}>
            {logged ?
                (<p>Hola, {props.name}</p>)
                :
                (<p>Please Login</p>)
            }
            <button onClick={() => {
                console.log("Boton pulsado");
                setLogged(!logged);
            }}>
                {logged ? "Logout" : "Login"}
            </button>
        </div>
    )
}
