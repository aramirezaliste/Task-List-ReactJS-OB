//loginFormik.jsx

import React from 'react';

//Importando react-router-dom
import { useNavigate } from 'react-router-dom';

//importando Formik
import { Formik, Field, Form, ErrorMessage } from 'formik';
//Importando Yup
import * as Yup from 'yup';

//Esquema de yup
//object(), esquema de tipo objeto, igual que las credenciales iniciales
//shape(), especifica la estructura del objeto (como los propTypes)
const loginSchema = Yup.object().shape(
    {
        //string(), de tipo string
        //email(), el tipo de validacion, dentro de (), el error
        //required(), es requerido o obligatorio, dentro de (), el error
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    }
);

export const LoginFormik = () => {

    
    //Para ir a una ruta deseada
    const navigate = useNavigate();

    //funcion para navegar a una ruta dada
    //Para react router V6, se ocupa useNavigate, en ves de useHistory
    const navigateTo = (path) => {
        navigate(path);
    }


    //Objeto con los parametros iniciales (State)
    const initialCredentials = {
        email: "",
        password: ""
    }

    return (
        <div>
            <h4>Login Formik</h4>
            {/* Componente Formik con sus props*/}
            <Formik
                //definiendo las props
                //Valores iniciales
                initialValues={initialCredentials}

                //Esquema de validacion
                validationSchema={loginSchema}

                //onSubmit, al hacer submit se inicializara la funcion
                //values, valores que recibe la funcion
                //Funcion, que espera una promesa, la cual recibe una response terminado un tiempo
                // y envia los valores en formato Objeto JS
                onSubmit={async (values) => {
                    await new Promise((response) => setTimeout(response, 1000));
                    alert(JSON.stringify(values, null, 2));
                    //Guardando los datos en el localStorage del navegador
                    await localStorage.setItem('credentials', values);
                    navigateTo('/profile')
                }}
            >
                {/*Obteniendo las props de Formik */}
                {({ values, touched, errors, isSubmitting, handleChange, handleBlur, }) =>

                (
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field id="email" type="email" name="email" placeholder="youtemail@example.com" />

                        <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            type="password"
                        />

                        {
                            //Error de Email, con condicionales
                            errors.email && touched.email && (
                                <ErrorMessage component='div' name='email' />
                            )

                        }

                        {
                            //Error de Password, con condicionales
                            errors.password && touched.password && (
                                <div>
                                    <ErrorMessage name='password' />
                                </div>
                            )
                        }

                        <button type="submit">Login</button>
                        {isSubmitting ? (<p>Login your credentials...</p>) : null}

                    </Form>
                )
                }

            </Formik>

        </div>
    )
}
