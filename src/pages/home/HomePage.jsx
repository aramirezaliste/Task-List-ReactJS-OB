//HomePage.jsx
import React from 'react';

//Importando los componentes para los tipos de navegaciones
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom'

export const HomePage = () => {

    //Para obtener la ruta en un momento en concreto
    const location = useLocation();
    //Para ir a una ruta deseada
    const navigate = useNavigate();

    console.log('We are in Router:', location.pathname);

    //funcion para navegar a una ruta dada
    //Para react router V6, se ocupa useNavigate, en ves de useHistory
    const navigateTo = (path) => {
        navigate(path);
    }

    //funcion para enviar props a una ruta
    //Para react router V6, se ocupa useNavigate, en ves de useHistory
    //Los parametros de busqueda tienen que ser creados en una variable aparte y 
    //despues convertidos en searchParams
    const params = { online: 'true' };
    const navigateProps = (path) => {
        navigate(
            {
                pathname: path, //Ruta
                search: `?${createSearchParams(params)}` //Query Paramas
            }, 
            {
                state: { //Estado
                    online: true
                }
            });
    }

    return (
        <div>
            <h1>HomePage</h1>
            <button onClick={() => navigateTo('/profile')}>
                Go To Profile
            </button>
            <button onClick={() => navigateProps('/online-state')}>
                Go To Page with State / Query Params
            </button>
        </div>
    )
}
