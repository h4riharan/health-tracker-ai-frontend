import React, { useState, useEffect } from 'react';
import MetricsForm from './MetricsForm';
import InsightsPanel from './InsightsPanel';
import AlertsPanel from './AlertsPanel';
import Charts from './Charts';

const Disclaimer = () => (
    <div className="disclaimer">
        <strong>Disclaimer:</strong> This is a demo application for portfolio purposes only.<br />
        <b>Do not enter or store any real personal health information (PHI).</b>
    </div>
);

const Dashboard: React.FC = () => {
    const [insights, setInsights] = useState<string>('');
    const [alerts, setAlerts] = useState<string[]>([]);
    const [metrics, setMetrics] = useState<any[]>([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        fetch('/api/metrics', {
            headers: {
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
        })
            .then(res => res.json())
            .then(setMetrics);
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('token');
        fetch('/api/alerts', {
            headers: {
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
        })
            .then(async res => {
                if (!res.ok) {
                    const text = await res.text();
                    throw new Error(text);
                }
                return res.json();
            })
            .then(setAlerts)
            .catch(err => {
                // Show a message or redirect to login
                console.error('Error fetching alerts:', err.message);
            });
    }, []);

    return (
        <div>
            <Disclaimer />
            <h1>AI-Powered Health Tracker</h1>
            <MetricsForm setInsights={setInsights} setAlerts={setAlerts} />
            <Charts data={metrics} />
            <InsightsPanel insights={insights} />
            <AlertsPanel alerts={alerts} />
        </div>
    );
};

export default Dashboard;