//task.jsx

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from "../../models/task.class"
import { LEVELS } from '../../models/levels.enum'

// Importamos la hoja de estilos de task.scss
import "../../styles/task.scss"

export const TaskComponent = ({ task, complete, remove }) => {

    //Para controlar los estados de las tareas
    useEffect(() => {
        console.log("Tarea creada")

        return () => {
            console.log(`Tarea: ${task.name} va a desaparecer`)
        }
    }, [task]);

    /**
    * Funcion que devuelve un Badge
    * Dependiendo del nivel de la Tarea
    */
    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (
                    <h6 className="mb-0">
                        <span className="badge bg-primary">{task.level}</span>
                    </h6>
                );
            case LEVELS.URGENT:
                return (
                    <h6 className="mb-0">
                        <span className="badge bg-warning">{task.level}</span>
                    </h6>
                );
            case LEVELS.BLOCKING:
                return (
                    <h6 className="mb-0">
                        <span className="badge bg-danger">{task.level}</span>
                    </h6>
                );
            default:
                break;
        }
    }

    /**
    * Funcion que devuelve un Icono
    * Dependiendo de si esta completa o no la Tarea
    */
    function taskCompletedIcon() {
        if (task.completed) {
            return (<i onClick={() => { complete(task) }}
                className='bi-toggle-on task-action'
                style={{ color: "green" }}>

            </i>)
        } else {
            return (<i onClick={() => { complete(task) }}
                className='bi-toggle-off task-action'
                style={{ color: "grey" }}>

            </i>)
        }
    }

    //Renderizado condicional de colores
    const taskCompleted = {
        color: 'gray',
        textDecoration: 'line-through'
    }

    const taskPending = {
        fontWeight: 'bold',
        color: 'tomato'
    }


    //Renderizado en formato de tabla
    return (
        <tr className="fw-normal" style={task.completed ? taskCompleted : taskPending}>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                {/* Usando una funcion por casos con switch */}
                {/* Funcion que retornara un elemento badge*/}
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {/* Metodo con funcion externa, retorna iconos */}
                {taskCompletedIcon()}

                {/* Se le asocia el metodo para borrar tareas al icono*/}
                <i onClick={() => { remove(task) }}
                    className='bi-trash ps-1 task-action'
                    style={{ color: "tomato" }}>

                </i>
            </td>
        </tr>
    );
};

TaskComponent.propTypes = {
    //task, es una instancia de la claseJS Task
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,

};