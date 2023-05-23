//AppRoutingOne.js
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

//Importando las paginas
import { HomePage } from './pages/home/HomePage';
import { NotFoundPage } from './pages/404/NotFoundPage';
import { AboutPage } from './pages/about-faqs/AboutPage';
import { ProfilePage } from './pages/profile/ProfilePage';
import { TaskPage } from './pages/tasks/TaskPage';
import { TaskDetailPage } from './pages/tasks/TaskDetailPage';

function AppRoutingOne() {

	//Funcion para mapear multiples paths para un solo componente
	function multiPath(element, ...paths) {
		return paths.map((path, index) => (<Route key={index} path={path} element={element} />))
	}

	//Estado si esta logeado o no el usuario
	const logged = false;


	return (
		// Definiendo un conjunto de rutas, para cargar los componentes 
		// basados en rutas especificas
		<Router>
			{/* Dentro del Routes(Switch), se esperan las rutas */}

			<div>
				<aside>
					{/* Los link seran la forma de ir hacia las rutas, como un panel de navegacion
						to, hacia donde va el link
					*/}
					<Link to='/' > || HOME | </Link>
					<Link to='/about' > | ABOUT | </Link>
					<Link to='/faqs' > | FAQs | </Link>
					<Link to='/tasks' > | TASKS | </Link>

					<Link to='/404'>| Not Existing Route ||</Link>
				</aside>

				<main>
					<Routes>
						{/* 
						Route, creando la ruta
						exact, que la ruta tiene que ser ecacta
						patch, nombre de la ruta, para llegar a ella
						element (component), componente que se abre al ingresar a esa ruta
						*/}
						<Route exact path='/' element={<HomePage />} />

						{/* En React router V6, la anotacion para un path multiple cambio, por
						lo que ahora para la nueva version se necesita hacer un map de las path,
						que pueden quedar representadas en una funcion */}
						{multiPath(<AboutPage />, '/about', '/faqs')}

						{/* Protegiendo la ruta Profile, para que solo un usuario logueado pueda entrar 
						en V6 redirect se reemplaza por Navigate */}
						<Route path='/profile' element=
							{
								logged ? 
								<ProfilePage/>
								:
								(<Navigate to='/' replace/>) 
								
							}>
							
						</Route>

						<Route path='/tasks' element={<TaskPage />}/>

						{/*TODO: Pagina con detalle de las tareas, se obtiene el id en el path */}
						<Route path='/task/:id' element={<TaskDetailPage />}/>

						{/* Siempre es importante que la Not found page este
				 		al final de todas las rutas */}
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
				</main>
			</div>

		</Router>

	);
}

export default AppRoutingOne;
