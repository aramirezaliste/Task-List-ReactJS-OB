//ProfilePage.jsx

import React from 'react';

//Importando los componentes para los tipos de navegaciones
import { useLocation, useNavigate } from 'react-router-dom';

//Va a recibir un user
export const ProfilePage = ({ user }) => {

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

//funcion para volver atras
const goBack = () => {
    navigate(-1);
}

    return (
        <div>
            <h1>
                ProfilePage
            </h1>
            <div>
				<button onClick={()=>navigateTo('/tasks')}>
					Go To Tasks
				</button>
				<button onClick={goBack}>
					Go Back
				</button>
			</div>
        </div>
    )
}
