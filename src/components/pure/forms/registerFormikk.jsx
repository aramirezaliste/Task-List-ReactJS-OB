//registerFormik.jsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

//Models
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

export const RegisterFormik = () => {

    //Valores iniciales del formulario
    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '', // to confirm password
        role: ROLES.USER
    }

    //Validacion del esquema de registro
    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, 'Username too short')
                .max(12, 'Username too long')
                .required('Username is required'),
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            role: Yup.string()
                .oneOf(
                    [ROLES.USER, ROLES.ADMIN], 'You must select a Role: User / Admin')
                .required('Role is required'),
            password: Yup.string()
                .min(8, 'Password to short')
                .required('Password is required'),
            //Validando la contraseña
            confirm: Yup.string().required('Password confirm is required').oneOf(
                        [Yup.ref('password'), null],
                        'Passwords must match!'
                    )
                

        }
    )

    //Alerta si el usuario a sido creado
    const submit = (values) => {
        alert('register user')
    }

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues={initialValues}
                //Esquema de validacion
                validationSchema={registerSchema}
                //onSubmit Event
                onSubmit={async (values) => {
                    await new Promise((response) => setTimeout(response, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >

                {/* Propiedades del formulario */}
                {({ values, touched, errors, isSubmitting, handleChange, handleBlur, }) =>
                (
                    <Form>
                        <label htmlFor="username">Username</label>
                        <Field id="username" type="text" name="username" placeholder="your username" />

                        {
                            //Error de Username
                            errors.username && touched.username && (
                                <ErrorMessage component='div' name='username' />
                            )
                        }

                        <label htmlFor="email">Email</label>
                        <Field id="email" type="email" name="email" placeholder="youtemail@example.com" />

                        {
                            //Error de Email
                            errors.email && touched.email && (
                                <ErrorMessage component='div' name='email' />
                            )
                        }

                        <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            type="password"
                        />

                        {
                            //Error de Password
                            errors.password && touched.password && (
                                <ErrorMessage name='password' component='div' />
                            )
                        }

                        <label htmlFor="confirm">Confirm Password</label>
                        <Field
                            id="confirm"
                            name="confirm"
                            placeholder="confirm password"
                            type="password"
                        />

                        {
                            //Error de confirm
                            errors.confirm && touched.confirm && (
                                <ErrorMessage name='confirm' component='div' />
                            )
                        }

                        <button type="submit">Register Account</button>
                        {isSubmitting ? (<p>Sending your credentials...</p>) : null}

                    </Form>
                )}

            </Formik>

        </div>
    )
}
