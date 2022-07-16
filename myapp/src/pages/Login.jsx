import React, { useState, useContext } from 'react'

import styles from './Login.module.css'
import { AuthContext } from "../context/auth"


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { login } = useContext
        (AuthContext)


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submit", { username, password })

        login(username, password)
    }


    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 >Login</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="usuario"
                        name="username"
                        type="text"
                        autoComplete="on"
                        id="username"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        placeholder="senha"
                        type="password"
                        name="password"
                        autoComplete="on"
                        id="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button>ENTRAR</button>
                    <p>Não tem uma conta? <a href='/register'>Cadastre-se</a></p>

                </form>
            </div>
        </div>
    )
}

export default Login