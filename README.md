# Server Dashboard

A real-time web dashboard for monitoring server metrics (CPU, RAM, Disk).

## Features

- Live CPU, RAM, and Disk usage monitoring
- CPU usage history chart
- Auto-refresh every 3 seconds

## Tech Stack

- Python Flask
- psutil
- Chart.js
- Docker

## Getting Started

```bash
docker build -t dashboard .
docker run -d -p 5000:5000 --name dashboard --restart always dashboard
```

Then open: `http://your-server-ip:5000`

## Project Structure

```
dashboard/
├── app.py              # Flask backend & API endpoints
├── Dockerfile          # Container definition
├── requirements.txt    # Python dependencies
├── templates/
│   └── index.html      # Main page
└── static/
    ├── style.css       # Styles
    └── app.js          # Charts & API calls
```
## Screenshots

![Grafana Dashboard](<img width="1568" height="745" alt="preview" src="https://github.com/user-attachments/assets/4e08740b-9a6e-4237-bcc9-598a4129b650" />)
