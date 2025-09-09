import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/auth';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await loginUser(username, password);
            navigate('/');
        } catch {
            setError('Login failed. Please check your credentials.');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '2em auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '1em' }}>Login</h2>
            {error && <div style={{ color: 'red', marginBottom: '1em', textAlign: 'center' }}>{error}</div>}
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                    autoFocus
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit" style={{ width: '100%', marginTop: '1em' }}>Login</button>
            <div style={{ textAlign: 'center', marginTop: '1em' }}>
                <a href="/register">Don't have an account? Register</a>
            </div>
        </form>
    );
};

export default Login;