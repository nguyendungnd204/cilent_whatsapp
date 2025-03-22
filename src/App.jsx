import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Dashboard from './pages/dashboard/dashboard';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import './App.css';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Sửa lỗi chính tả

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    return (
        <Router>
            <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/login"
                    element={<Login setIsAuthenticated={setIsAuthenticated} />} // Truyền setIsAuthenticated
                />
                <Route
                    path="/dashboard"
                    element={
                        isAuthenticated ? (
                            <Dashboard />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
                <Route path="*" element={<h1>404 - Not Found</h1>} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;