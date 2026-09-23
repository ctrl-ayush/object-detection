FROM python:3.10-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && \
    apt-get install -y ca-certificates curl && \
    update-ca-certificates

# Copy requirements file
COPY requirements.txt .

# Upgrade pip
RUN python -m pip install --upgrade pip --trusted-host pypi.org --trusted-host files.pythonhosted.org

# Install dependencies (trusted hosts fix SSL issue)
RUN pip install --no-cache-dir \
    --trusted-host pypi.org \
    --trusted-host files.pythonhosted.org \
    -r requirements.txt

# Copy backend code
COPY . .

# Create directories
RUN mkdir -p temp/input temp/output

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]