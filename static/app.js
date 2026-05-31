const labels = [];
const cpuData = [];

const ctx = document.getElementById('cpuChart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'CPU %',
            data: cpuData,
            borderColor: '#7c6aff',
            backgroundColor: 'rgba(124, 106, 255, 0.1)',
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { min: 0, max: 100, ticks: { color: '#888' }, grid: { color: '#2a2a4a' } },
            x: { ticks: { color: '#888' }, grid: { color: '#2a2a4a' } }
        },
        plugins: { legend: { labels: { color: '#888' } } }
    }
});

async function fetchStats() {
    const res = await fetch('/api/stats');
    const data = await res.json();

    document.getElementById('cpu').textContent = data.cpu;
    document.getElementById('ram').textContent = data.ram;
    document.getElementById('disk').textContent = data.disk;
    document.getElementById('hostname').textContent = '🖥️ ' + data.hostname;

    const now = new Date().toLocaleTimeString('tr-TR');
    labels.push(now);
    cpuData.push(data.cpu);
    if (labels.length > 20) { labels.shift(); cpuData.shift(); }
    chart.update();
}

fetchStats();
setInterval(fetchStats, 3000);

