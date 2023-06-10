//AppRoutingFinal.js
import { BrowserRouter as Router, Route, Routes, Navigate,} from 'react-router-dom';

import { NotFoundPage } from './pages/404/NotFoundPage';
import { LoginPage } from './pages/auth/LoginPage';
import { DashBoard } from './pages/dashboard/DashBoard';

function AppRoutingFinal() {

	//Funcion para mapear multiples paths para un solo componente
	function multiPath(element, ...paths) {
		return paths.map((path, index) => (<Route key={index} path={path} element={element} />))
	}

	//Variable para validar si esta logeado el usuario
	//TODO: Change to value from sessionStorage
	let loggedIn = true;

	return (
		<div>
			<Router>
				{/*Routes List */}
				<Routes>
					{/* Redirections to protect our routes */}
					<Route exact path='/' element={
						loggedIn ?
							<Navigate to='/dashboard' />
							:
							<Navigate to='/login' />
					}
					/>
					{/* Login Route */}
					<Route exact path='/login' element={<LoginPage />} />
					{/* DashBoard Route */}
					<Route exact path='/dashboard' element={
						loggedIn ?
							<DashBoard />
							:
							<Navigate to='/login' />
					}
					/>

					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</Router>
		</div>

	);
}

export default AppRoutingFinal;
