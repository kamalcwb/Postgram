import React from 'react'
import { useState } from 'react'

import styles from './Register.module.css'
import SubmitButton from '../components/layout/SubmitButton'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()

    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value });


    function validate() {
        if (!user.username) return setStatus({ type: 'error', message: 'Erro: Necessário preencha o campo usuario!' });
        if (user.username.match(/[\s]+/)) return setStatus({ type: 'error', message: 'Erro: Nome de usuario não pode conter espaços em branco!' });
        if (user.username.match(/[^A-zÀ-ú]+/)) return setStatus({ type: 'error', message: 'Erro: Nome de usuario deve conter apenas letras!' });

        if (!user.password) return setStatus({ type: 'error', message: 'Erro: Necessário preencher o campo senha!' });
        if (user.password.length < 6) return setStatus({ type: 'error', message: 'Erro: A senha precisa ter pelo menos seis caracteres!' });
        if (user.password.match(/[\s]+/)) return setStatus({ type: 'error', message: 'Erro: Sua senha não pode conter espaços em branco!' });
        if (!user.password.match(/[a-z]+/)) return setStatus({ type: 'error', message: 'Erro: Sua senha deve conter ao menos uma letra minuscula' });
        if (!user.password.match(/[A-Z]+/)) return setStatus({ type: 'error', message: 'Erro: Sua senha deve conter ao menos uma letra maiuscula' });
        if (!user.password.match(/[0-9]+/)) return setStatus({ type: 'error', message: 'Erro: Sua senha deve conter ao menos um número' });

        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!validate()) return;

        fetch("http://localhost:5000/users/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(res => {
                if (!res.ok) {
                    console.log(res)
                    console.log(res.message)
                    // throw Error(res.json.message)
                    // throw Error('Erro: Nome de usuario já cadastrado')
                } else
                    setStatus({
                        type: 'success',
                        message: "Usuário cadastrado com sucesso!"
                    });
                setTimeout(() => {
                    navigate('/login')
                }, 300)
            })
            .catch((err) => {
                setStatus({
                    type: 'error',
                    message: err.message
                })
            })
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1>CRIAR UMA CONTA</h1>
                {status.type === 'success' ? <span style={{ color: "green" }}>{status.message}</span> : ""}
                {status.type === 'error' ? <span style={{ color: "#ff0000" }}>{status.message}</span> : ""}

                <form onSubmit={handleSubmit}>
                    <input
                        placeholder='Seu nome'
                        type="text"
                        required
                        name="username"
                        id="username"
                        // pattern="[A-Za-z]{3,}" title="Deve conter pelo menos 4 letras"
                        onChange={valueInput}
                        value={user.username || ''}


                    />
                    <input
                        placeholder='Sua senha'
                        type="password"
                        required
                        name="password"
                        id="password"
                        // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                        // title="Deve conter no minimo 6 caracteres com pelo menos uma letra maiuscula, uma letra minuscula e um numero"
                        onChange={valueInput}
                        value={user.password || ''}
                    />
                    <SubmitButton className={styles.btn} text="CRIAR CONTA" />
                    <p>Já tem uma conta? <a href='/login'> ENTRAR</a></p>
                </form>
            </div>
        </div>
    )
}

export default Register