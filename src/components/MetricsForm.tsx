import React, { useState } from 'react';
import { submitMetrics } from '../services/api';

interface Props {
    setInsights: (insights: string) => void;
    setAlerts: (alerts: string[]) => void;
}

const MetricsForm: React.FC<Props> = ({ setInsights, setAlerts }) => {
    const [metrics, setMetrics] = useState({ steps: '', heartRate: '', sleep: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMetrics({ ...metrics, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const { insights, alerts } = await submitMetrics({
                steps: Number(metrics.steps),
                heartRate: Number(metrics.heartRate),
                sleepHours: Number(metrics.sleep),
            });
            setInsights(insights || 'No insights returned.');
            setAlerts(alerts || []);
        } catch (error) {
            setInsights('Error fetching insights.');
            setAlerts(['Error submitting metrics.']);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Steps Walked: <input type="number" name="steps" value={metrics.steps} onChange={handleChange} required /></label>
            </div>
            <div>
                <label>Heart Rate: <input type="number" name="heartRate" value={metrics.heartRate} onChange={handleChange} required /></label>
            </div>
            <div>
                <label>Sleep Hours: <input type="number" name="sleep" value={metrics.sleep} onChange={handleChange} required /></label>
            </div>
            <button type="submit" style={{ marginTop: '1em' }}>Submit Metrics</button>
        </form>
    );
};

export default MetricsForm;