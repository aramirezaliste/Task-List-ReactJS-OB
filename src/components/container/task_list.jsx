//task_list.jsx

import React, { useState, useEffect } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import { TaskComponent } from '../pure/task'
import {TaskForm} from '../pure/forms/taskForm'

// Importamos la hoja de estilos de task.scss
import "../../styles/task.scss"

export const TaskList = () => {

    //Tarea default para probar los componentes
    ////Creando un bucle en el HTML, de varias tareas
    const defTask1 = new Task("Example 1", "Default 1", true, LEVELS.NORMAL);
    const defTask2 = new Task("Example 2", "Default 2", false, LEVELS.URGENT);
    const defTask3 = new Task("Example 3", "Default 3", false, LEVELS.BLOCKING);

    // Estado inicial del componente
    ////Se Agregan un conjunto de tareas
    const [tasks, setTasks] = useState([defTask1, defTask2, defTask3]);
    // Estado del componente si esta cargando o no.
    const [loading, setLoading] = useState(true);

    // Control de lciclo de vida del componente
    useEffect(() => {
        console.log("El estado del componente TaskList ha sido modificado")
        // El componente ha dejado de cargar
        setLoading(false)

        return () => {
            console.log("El componente TaskList va a desaparecer")
        }

        // Se ejecute cada vez que haya una modificacion en las tasks
    }, [tasks])


    // Funcion para cambiar estado
    function completeTask(task){
        console.log("Complete this Task", task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed
        setTasks(tempTasks);
    }

    // Funcion para borrar tarea
    function removeTask(task){
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1)
        setTasks(tempTasks);
    }

    // Funcion para añadir tareas desde el Form
    // Recibe por parametro desde el hijo, la tarea nueva
    function addTask(task){
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    //Se reemplazaran los titulos <h1>, por columnas y rows de bootstrap
    return (
        <div>
            {/*Importande usar className en React */}
            {/*col-12, serian el ancho maximo de columnas en boostrap */}
            <div className='col-12'>
                {/* Card de boostrap*/}
                <div className='card'>
                    {/* Card Header (Titulo)*/}
                    <div className="card-header p-3">
                        <h5>
                            Your Tasks:
                        </h5>
                    </div>
                    {/* Card Body (Contenido)*/}
                    {/* Estilo embebido en linea*/}
                    {/* Si se pasa de los 400px, se crea un scrollbar */}
                    <div className="card-body" data-mbd-perfect-scrollbar="true" style={{ position: "relative", height: "400px" }}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Se Itera sobre una conjunto de tareas, para renderizarlas */}
                                {/* key, es una propiedad que hay que darle cuando se itera en el DOM,
                                es una forma de identificacion unica de los elementos*/}
                                {tasks.map((task, index) => {
                                    return (
                                        <TaskComponent 
                                        key={index} 
                                        task={task} 
                                        complete={completeTask} 
                                        remove={removeTask} />
                                    )
                                })
                                }


                            </tbody>
                        </table>
                    </div>
                    <TaskForm 
                    add={addTask} />
                </div>
            </div>
        </div>
    )
}