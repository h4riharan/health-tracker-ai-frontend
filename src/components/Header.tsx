import React from 'react';

const Header: React.FC<{ onLogout: () => void }> = ({ onLogout }) => (
    <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1em 0',
        borderBottom: '1px solid #e0e0e0',
        marginBottom: '2em'
    }}>
        <div style={{ fontWeight: 700, fontSize: '1.2em', color: '#4f8cff' }}>
            Health Tracker
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
            <span
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: '#e3eafc',
                    color: '#4f8cff',
                    fontWeight: 700,
                    fontSize: '1.1em'
                }}
                title="Profile"
            >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="7" r="4" />
                    <ellipse cx="10" cy="15" rx="6" ry="3" />
                </svg>
            </span>
            <button
                onClick={onLogout}
                style={{
                    background: '#fff',
                    color: '#4f8cff',
                    border: '1px solid #4f8cff',
                    borderRadius: 4,
                    padding: '0.4em 1em',
                    cursor: 'pointer',
                    fontWeight: 600
                }}
            >
                Logout
            </button>
        </div>
    </header>
);

export default Header;