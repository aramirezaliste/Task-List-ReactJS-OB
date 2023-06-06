//TaskDetailPage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';

export const TaskDetailPage = ({task}) => {

    //Obtiene el id de la direccion de la pagina
    const {id} = useParams();

    return (
        <div>
            <h1>
                TaskDetailPage - {id}
            </h1>
            <h2>
                {task[id-1].name}
            </h2>
            <h3>
                {task[id-1].description}
            </h3>

        </div>
    )
}
