//Copyright.jsx

import React from 'react';

//Material UI Components
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

//variant, tipo de contenido
export const Copyright = () => {
  return (
    <Typography variant="body2" color="GrayText" align='center'>
      {'Copyright (C)'}
      <Link color="inherit" href='https://imaginaformacion.com'>
        Imagina Formacion
      </Link>
    </Typography>
  )
}
