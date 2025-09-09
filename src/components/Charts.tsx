import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

interface ChartsProps {
    data: {
        steps?: number;
        heartRate?: number;
        sleepHours?: number;
        timestamp?: string | Date;
    }[];
}

const Charts: React.FC<ChartsProps> = ({ data }) => {
    // Format timestamp for display
    const chartData = data.map(item => ({
        ...item,
        date: item.timestamp ? new Date(item.timestamp).toLocaleDateString() : '',
    }));

    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="steps" stroke="#8884d8" name="Steps" />
                    <Line type="monotone" dataKey="heartRate" stroke="#82ca9d" name="Heart Rate" />
                    <Line type="monotone" dataKey="sleepHours" stroke="#ffc658" name="Sleep Hours" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Charts;