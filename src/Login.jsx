import React, { useState } from 'react'


const USER_CREDENTIALS =  {
    username: "admin",
    password: "admin"
}

export const Login = () => {
    const [username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const [error, setError] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === USER_CREDENTIALS.username && password === USER_CREDENTIALS.password){
            alert("inicio de sesión exitoso")
            setError("")
        } else {
            alert("Usuario o contraseñas incorrectos")
            setUsername("")
            setPassword("")
            setError("Usuario o contraseña incorrectos")
            
        }
        console.log("submit")
    }

  return (
    <div>
        <h1>Iniciar sesión</h1>
        <form onSubmit = {handleSubmit}>
            <div>
                <label htmFor="username">Usuario:</label>
                <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    value={username}
                    onChange = {(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label htmFor="password">Contraseña:</label>
                <input 
                    type="text" 
                    name="password" 
                    id="password" 
                    value={username}
                    onChange = {(e) => setPassword(e.target.value)}
                />
            </div>
            <button type='submit'>Iniciar Sesion</button>
            {error && <p style={{color: "red"}}>{error}</p>}
        </form>
    </div>
  )
}


