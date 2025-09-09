import React from 'react';

const InsightsPanel: React.FC<{ insights: string }> = ({ insights }) => (
    <section style={{ marginTop: '2em' }}>
        <h2>AI Insights</h2>
        <div className="ai-insights">
            {insights || 'No insights yet.'}
        </div>
    </section>
);

export default InsightsPanel;