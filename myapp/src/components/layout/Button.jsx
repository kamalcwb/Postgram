import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.css'

const Button = ({ to, text }) => {
    return (
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
    )
}

export default Button