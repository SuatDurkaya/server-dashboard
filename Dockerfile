FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .

# Building dependencies, this is for image.

RUN pip install -r requirements.txt

# Copy All Files

COPY . .

# Open "5000" port of container

EXPOSE 5000

# Everytime you starting program this will be happen
CMD ["python3", "app.py"]

