import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'

import { AuthContext } from '../context/auth'


const Navbar = (user) => {
    const onlineUser = localStorage.getItem('onlineUser')
    const { logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
    }
    return (
        <nav className={styles.navbar}>
            <Container>
                <ul className={styles.list}>
                    <h3>Bem vindo {onlineUser}</h3>
                </ul>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link onClick={handleLogout} to='/login'>SAIR</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar