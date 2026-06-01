from flask import Flask, jsonify, render_template
from prometheus_flask_exporter import PrometheusMetrics
import psutil
import socket

app = Flask(__name__)
metrics = PrometheusMetrics(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/stats')
def stats():
    return jsonify({
        'cpu': psutil.cpu_percent(interval=1),
        'ram': psutil.virtual_memory().percent,
        'disk': psutil.disk_usage('/').percent,
        'hostname': socket.gethostname(),
        'version': '1.1',
        'uptime': int(psutil.boot_time())
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
