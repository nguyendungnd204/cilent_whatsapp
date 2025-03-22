import React, {useState} from 'react';
import { signin } from '../../services/api';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = ({setIsAuthenticated}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await signin(email, password);
            console.log('Login success', response);
            localStorage.setItem('token', response.token);
            setIsAuthenticated(true);
            navigate('/dashboard')
        } catch (error) {
            setError(error.message || 'Login failed');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                {error && <p className="error">{error}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;