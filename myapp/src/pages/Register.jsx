import React from 'react'
import { useState } from 'react'

import styles from './Register.module.css'
import SubmitButton from '../components/layout/SubmitButton'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value });

    const navigate = useNavigate()

    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });


    function validate() {
        if (!user.username) return setStatus({ type: 'error', mensagem: 'Erro: Necessário preencha o campo usuario!' });
        if (!user.password) return setStatus({ type: 'error', mensagem: 'Erro: Necessário preencher o campo senha!' });
        if (user.password.length < 6) return setStatus({ type: 'error', mensagem: 'Erro: A senha precisa ter pelo menos seis caracteres!' });

        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!validate()) return;

        const saveDataForm = true;

        if (saveDataForm) {
            setStatus({
                type: 'success',
                mensagem: "Usuário cadastrado com sucesso!"
            });
            setUser({
                name: '',
                password: ''
            });
        } else {
            setStatus({
                type: 'error',
                mensagem: "Erro: Usuário não cadastrado com sucesso!"
            });
        }


        fetch("http://localhost:5000/users/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(() => {
                navigate('/login')
                console.log('Novo usuario cadastrado com sucesso')
            }).catch((err) => console.log(err))
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1>CRIAR UMA CONTA</h1>
                {status.type === 'success' ? <p style={{ color: "green" }}>{status.mensagem}</p> : ""}
                {status.type === 'error' ? <p style={{ color: "#ff0000" }}>{status.mensagem}</p> : ""}

                <form onSubmit={handleSubmit}>
                    <input
                        placeholder='Seu nome'
                        type="text"
                        required
                        name="username"
                        id="username"
                        // pattern="[A-Za-z]{3,}" title="Deve conter pelo menos 4 letras"
                        onChange={valueInput}
                        value={user.username}


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
                        value={user.password}
                    />
                    <SubmitButton className={styles.btn} text="CRIAR CONTA" />
                    <p>Já tem uma conta? <a href='/login'> ENTRAR</a></p>
                </form>
            </div>
        </div>
    )
}

export default Register