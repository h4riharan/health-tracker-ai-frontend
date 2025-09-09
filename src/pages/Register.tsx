import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/auth';

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await registerUser(username, email, password);
            navigate('/login');
        } catch {
            setError('Registration failed. Try a different username or email.');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '2em auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '1em' }}>Register</h2>
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
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
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
            <button type="submit" style={{ width: '100%', marginTop: '1em' }}>Register</button>
            <div style={{ textAlign: 'center', marginTop: '1em' }}>
                <a href="/login">Already have an account? Login</a>
            </div>
        </form>
    );
};

export default Register;