export async function submitMetrics(metrics: { steps: number; heartRate: number; sleepHours: number }) {
  const { steps, heartRate, sleepHours } = metrics;
  const response = await fetch('/api/metrics', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({ steps, heartRate, sleepHours }),
  });
  if (!response.ok) throw new Error('Failed to submit metrics');
  return response.json();
}