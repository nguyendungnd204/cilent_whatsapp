import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = ({ isAuthenticated, onLogout }) => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">My App</Link>
            </div>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {isAuthenticated ? (
                        <>
                            <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li>
                                <button onClick={onLogout} className="logout-button">
                                    Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;