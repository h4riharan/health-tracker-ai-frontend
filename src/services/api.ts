const API_URL = import.meta.env.VITE_API_URL;

export async function submitMetrics(metrics: { steps: number; heartRate: number; sleepHours: number }) {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/api/metrics`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(metrics),
  });
  if (!response.ok) throw new Error('Failed to submit metrics');
  return response.json();
}