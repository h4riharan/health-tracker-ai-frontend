import React from 'react';

const AlertsPanel: React.FC<{ alerts: string[] }> = ({ alerts }) => (
    <section style={{ marginTop: '2em' }}>
        <h2>Alerts</h2>
        <ul>
            {alerts.length === 0 ? <li>No alerts.</li> : alerts.map((alert, idx) => <li key={idx}>{alert}</li>)}
        </ul>
    </section>
);

export default AlertsPanel;