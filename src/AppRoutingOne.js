//AppRoutingOne.js
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useLocation} from 'react-router-dom';

//Importando las paginas
import { HomePage } from './pages/home/HomePage';
import { NotFoundPage } from './pages/404/NotFoundPage';
import { AboutPage } from './pages/about-faqs/AboutPage';
import { ProfilePage } from './pages/profile/ProfilePage';
import { TaskPage } from './pages/tasks/TaskPage';
import { TaskDetailPage } from './pages/tasks/TaskDetailPage';
import { LoginPage } from './pages/auth/LoginPage';
import { StatePage } from './pages/home/StatePage';

function AppRoutingOne() {

	//Funcion para mapear multiples paths para un solo componente
	function multiPath(element, ...paths) {
		return paths.map((path, index) => (<Route key={index} path={path} element={element} />))
	}

	//Estado si esta logeado o no el usuario
	let logged = localStorage.getItem('credentials');

	//Se usara el useEffect para controlar el cambio de logged.
	// useEffect(() => {
	// 	logged = localStorage.getItem('credentials');
	// 	console.log('User Logged ?', logged)
	// }, [])

	//Simulacion de tareas para comprobar la TaskDetailPage.jsx
	let taskList = [
		{
			id: 1,
			name: 'Task 1',
			description: 'My first Task'
		},
		{
			id: 2,
			name: 'Task 2',
			description: 'My Second Task'
		},
	]



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
					<Link to='/task/1' > | Task 1 | </Link>
					<Link to='/task/2' > | Task 2| </Link>
					<Link to='/faqs' > | FAQs | </Link>
					<Link to='/login' > | LOGIN | </Link>

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
						<Route exact path='/online-state' element={<StatePage />} />
						{/* En React router V6, la anotacion para un path multiple cambio, por
						lo que ahora para la nueva version se necesita hacer un map de las path,
						que pueden quedar representadas en una funcion */}
						{multiPath(<AboutPage />, '/about', '/faqs')}
						{/* Protegiendo la ruta Profile, para que solo un usuario logueado pueda entrar 
						en V6 redirect se reemplaza por Navigate y no se pueden llamar funciones dentro de element */}
						<Route path='/profile' element=
							{
								logged ?
									<ProfilePage />
									:
									(<Navigate to='/login' />)

							}>
						</Route>
						{/* Creando la ruta de login */}
						<Route path='/login' element=
							{
								logged ?
									<HomePage />
									:
									<LoginPage />

							}>
						</Route>
						<Route path='/tasks' element={<TaskPage />} />
						{/*TODO: Pagina con detalle de las tareas, se obtiene el id en el path */}
						{/*Las propiedades en V6, se pasan directo dentro del componente a renderizar  */}
						<Route exact path='/task/:id' element={<TaskDetailPage task={taskList}/>} />
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
