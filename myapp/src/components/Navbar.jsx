import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'


const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Container>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/login'>Entrar</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar