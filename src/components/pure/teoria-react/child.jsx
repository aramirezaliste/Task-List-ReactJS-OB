//child.jsx

import React, {useRef} from 'react';

export const Child = ({ name, send, update }) => {

    //Creando referencia vacia
    const messageRef = useRef('');

    //Referencia vacia para el formulario
    const nameRef = useRef('')

    function pressButton() {
        //Asociando un valor de la referencia (current.value, es similar a target.value)
        const text = messageRef.current.value;

        alert(`Text in Input ${text}`);
    }

    function pressButtonParams(text) {
        alert(`Text: ${text}`);
    }

    //Funcion submit
    function submitName(e){
        //para evitar recargar la pagina
        e.preventDefault()

        //metodo enviado desde el padre
        update(nameRef.current.value);
    }

    return (
        <div style={{background:"cyan", padding:"30px"}}>
            {/*Evento onMouseOver, cuando el mouse este encima ejecuta algo */}
            <p onMouseOver={() => { console.log("On Mouse Over") }}>Hello, {name}</p>
            

            {/*Evento onClick, al hacer click ejecuta algo */}
            <button onClick={() => { console.log("Boton 1 Pulsado") }}>
                Boton 1
            </button>

            {/*Evento onClick, al hacer click llama una funcion */}
            <button onClick={pressButton}>
                Boton 2
            </button>

            {/*Evento onClick, al hacer click llama una funcion, pasando parametros
            al pasar parametros, tiene que estar dentro de una funcion anonima*/}
            <button onClick={() => { pressButtonParams('Hello') }}>
                Boton 3
            </button>

            {/* onFocus, al enfocarse ejecuta algo */}
            {/* onChange, al cambiar ejecuta algo (e, elemento & targe.value, valor)*/}
            {/* onCopy, al copiar el contenido ejecuta algo */}
            {/* ref, asocia la referencia al input */}
            <input
                type='text'
                placeholder='Send text to your father'
                onFocus={() => { console.log("Input Focused") }}
                onChange={(e) => { console.log("Input Changed " + e.target.value) }}
                onCopy={() => {console.log("Copied text from Input")}}

                ref = {messageRef}
            />

            {/*Evento onClick, al hacer click llama una funcion enviada por props (send), desde el padre*/}
            {/* Enviando el valor de la referencia desde el hijo al Padre */}
            <button onClick={()=>{ send(messageRef.current.value)}}>
                Send Message
            </button>

            {/*Formulario */}   
            {/*Recibira un nuevo nombre y modificara el nombre */} 
            <div style={{marginTop:"20px"}}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='New Name'/>
                    <button type='submit'>Update Name</button>
                </form>
            </div>
        </div>
    )
}