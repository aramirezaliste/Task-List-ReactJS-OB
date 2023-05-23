//AboutPage.jsx

import React from 'react'

//Importando los componentes para los tipos de navegaciones
import { useLocation, useNavigate } from 'react-router-dom'

export const AboutPage = () => {

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

	//funcion hacia adelante
	const goForward = () =>{
		navigate(1);
	}

	return (
		<div>
			<h1>About | FAQs Page</h1>

			{/* Area de botones para volver atras o ir al home */}
			<div>
				<button onClick={()=>navigateTo('/')}>
					Go To Home
				</button>
				<button onClick={goBack}>
					Go Back
				</button>
				<button onClick={goForward}>
					Go Forward
				</button>
			</div>
		</div>
	)
}
