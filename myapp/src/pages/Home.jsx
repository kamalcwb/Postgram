
import React from 'react'
import styles from './Home.module.css'
import Button from '../components/layout/Button'


const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 >Login</h1>
        <form >
          <input placeholder="usuario" />
          <input placeholder="senha" type="password" />
          <Button to='/' text='Entrar' />
          <a href='/newaccount'>Criar uma conta</a>
        </form>
      </div>
    </div>
  )
}

export default Home

