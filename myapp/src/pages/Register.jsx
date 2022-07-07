import React from 'react'
import styles from './Register.module.css'

const Register = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1>CRIAR UMA CONTA</h1>
                <form>
                    <input placeholder='Seu nome' />
                    <input placeholder='Sua senha' />
                </form>
            </div>
        </div>
    )
}

export default Register