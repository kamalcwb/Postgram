import React, { useContext } from 'react'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Container from './components/Container'

import Home from './pages/Home'
import Register from './pages/Register';
import Login from './pages/Login';


import { AuthProvider, AuthContext } from './context/auth';

function App() {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext)

    if (loading) {
      return <div className='loading'>Carregando...</div>
    }

    if (!authenticated) {
      return <Navigate to='/login' />
    }
    return children;
  }
  return (
    <Router>
      <AuthProvider>
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={
              <Private>
                <Navbar />
                <Home />
              </Private>
            } />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Container>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
