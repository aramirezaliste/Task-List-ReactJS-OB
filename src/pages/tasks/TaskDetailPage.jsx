//TaskDetailPage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';

export const TaskDetailPage = () => {

    //Obtiene el id de la tarea
    const {id} = useParams();

    return (
        <div>
            <h1>
                TaskDetailPage - {id}
            </h1>

        </div>
    )
}
