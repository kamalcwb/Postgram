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
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        placeholder="senha"
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button>ENTRAR</button>
                    <a href='/register'>Criar uma conta</a>
                </form>
            </div>
        </div>
    )
}

export default Login