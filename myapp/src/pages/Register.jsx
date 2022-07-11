import React from 'react'
import { useState } from 'react'

import styles from './Register.module.css'
import SubmitButton from '../components/layout/SubmitButton'

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = { username, password }


        fetch("http://localhost:5000/users/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(() => {
                console.log('Novo usuario cadastrado com sucesso')
            }).catch((err) => console.log(err))
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1>CRIAR UMA CONTA</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder='Seu nome'
                        type="text"
                        required
                        name="username"
                        id="username"
                        value={username}
                        pattern="[A-Za-z]{3,}" title="Deve conter pelo menos 4 letras"
                        onChange={(e) => setUsername(e.target.value)}

                    />
                    <input
                        placeholder='Sua senha'
                        type="password"
                        required
                        name="password"
                        id="password"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                        title="Deve conter no minimo 6 caracteres com pelo menos uma letra maiuscula, uma letra minuscula e um numero"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <SubmitButton className={styles.btn} text="CRIAR CONTA" />
                    <p>Já tem uma conta? <a href='/login'> ENTRAR</a></p>
                </form>
            </div>
        </div>
    )
}

export default Register