import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext()


export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user')
        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser))
        }
        setLoading(false)
    }, [])

    const login = async (username, password) => {

        console.log("login auth", { username, password })


        const loggedUser = {
            id: '1234',
            username,
        }

        localStorage.setItem("user", JSON.stringify(loggedUser))
        if (password === "12345")
            setUser({ id: 123, username })
        navigate("/")
    }

    const logout = () => {
        console.log("logout")
        localStorage.removeItem("user")
        setUser(null)
        navigate("/login")
    }

    return (
        <AuthContext.Provider
            value={{ authenticated: !!user, user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>

    )
} 