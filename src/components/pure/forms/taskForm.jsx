// taskForm.jsx

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

export const TaskForm = ({ add, length }) => {

	//Definiendo las referencias
	const nameRef = useRef('');
	const descriptionRef = useRef('');
	const levelRef = useRef(LEVELS.NORMAL);

	//Metodo llamado al hacer submit
	function addTask(e) {
		e.preventDefault();

		//Generado de nuevas tareas, accediento al valor por referencia
		const newTask = new Task(
			nameRef.current.value,
			descriptionRef.current.value,
			false,
			levelRef.current.value
		)
		//Metodo que recibe del padre, se envia por parametro la tarea nueva
		add(newTask);
	}

	return (
		<form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
			<div className='ms-3 form-outline flex-fill'>
				<input ref={nameRef} id='inputName' type='text' className='mb-1 form-control form-control-lg' required autoFocus placeholder='Task Name' />
				<input ref={descriptionRef} id='inputDescription' type='text' className='mb-1 form-control form-control-lg' required placeholder='Task Description' />
				{/*Dropdown de seleccion*/}
				<select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel' className="form-select form-control form-control-lg">
					<option value={LEVELS.NORMAL}>
						Normal
					</option>
					<option value={LEVELS.URGENT}>
						Urgent
					</option>
					<option value={LEVELS.BLOCKING}>
						Blocking
					</option>
				</select>
			</div>
			<button type='submit' className='btn btn-success btn-lg mx-3'>
				{/*Cambia el contenido a traves de logica condicional*/}
				{length > 0 ? 'Add new task' : 'Create new task'}
			</button>

		</form>
	)
};

TaskForm.propTypes = {
	add: PropTypes.func.isRequired
}