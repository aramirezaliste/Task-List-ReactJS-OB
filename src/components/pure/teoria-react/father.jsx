//father.jsx

import React, {useState} from 'react';
import { Child } from '../teoria-react/child';

export const Father = () => {

    //Estado inicial del nombre, que se actualizara a traves del del padre, ejecutado por el hijo
    const [name, setName] = useState('Andres')

    //Funcion que muestra un mensaje y se ejecutara en el hijo, cuando pase algo
    function showMessage(text){
        alert(`Message reciver:  ${text}`)
    }

    //Funcion que modifica el nombre, usando un Estado
    function updateName(newName){
        setName(newName)
    }

    return (
        <div style={{background:"tomato", padding: "10px"}}>
            {/* Renderizando el componente Hijo */}
            {/* Enviando funciones por props */}
            <Child name={name} send={showMessage} update={updateName}/>
        </div>
    )
}