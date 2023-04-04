import React, {useState} from 'react'

export const loginForm = () => {

    // Credenciales usuario inicial
    const initialCredentials = [
        {
            user : "",
            password : ""
        }
    ]

    // Control de un usuario inicial
    const [credentials, setCredentials] = useState(initialCredentials)

  return (
    <div>

    </div>
  )
}
