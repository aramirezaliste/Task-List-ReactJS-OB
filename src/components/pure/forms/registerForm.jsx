import React, {useState} from 'react'

export const RegisterForm = () => {

    // Credenciales usuario inicial
    const initialData = [
        {
            user : "",
            name: "",
            email: "",
            password : ""
        }
    ]

    // Control de un usuario inicial
    const [data, setData] = useState(initialData)

  return (
    <div>

    </div>
  )
}
