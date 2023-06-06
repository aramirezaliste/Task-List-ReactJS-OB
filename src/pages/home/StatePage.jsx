//StatePage.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';


export const StatePage = () => {

    const location = useLocation();

    //State, traspaso de informacion privada
    console.log('Location State', location.state.online) //State sent
    //Query Params, traspaso de informacion, publica y visible
    console.log('Query Params',location.search) //Query Paramas Sent

  return (
    <div>
        <h1>State: {location.state.online ? 'The User is Online' : 'The User is Offline'} </h1>
    </div>
  )
}
