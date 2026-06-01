# Server Dashboard

A real-time server monitoring stack built with Flask, Prometheus, and Grafana.

## Stack

- **Python Flask** — backend & metrics endpoint
- **Prometheus** — metrics collection
- **Grafana** — visualization
- **Node Exporter** — system metrics (CPU, RAM, Disk, Network)
- **Docker Compose** — container orchestration
- **GitHub Actions** — CI/CD pipeline

## Features

- Real-time CPU, RAM, Disk monitoring
- Grafana dashboards with historical data
- Auto-deploy on git push
- Containerized with Docker Compose

## Getting Started

```bash
git clone https://github.com/SuatDurkaya/server-dashboard
cd server-dashboard
docker compose up -d
```

| Service | URL |
|---|---|
| Dashboard | http://localhost:5000 |
| Prometheus | http://localhost:9090 |
| Grafana | http://localhost:3000 |

## Architecture
Flask App (/metrics)
↓
Prometheus (scrape every 5s)
↓
Grafana (visualize)
GitHub Push → GitHub Actions → SSH Deploy → Docker Compose

## Screenshots

<img width="1568" height="745" alt="preview" src="https://github.com/user-attachments/assets/8f3587c8-4cfa-4c28-90ea-2fcf62ddccb0" />
