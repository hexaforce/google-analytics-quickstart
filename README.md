# google-analytics-quickstart

```
pip3 install virtualenv
virtualenv .venv
source .venv/bin/activate
.venv/bin/pip install -r gunicorn-flask/requirements.txt
```

```
docker compose up -d --build
```

```
export GOOGLE_APPLICATION_CREDENTIALS="/Users/hexaforce/google-analytics-quickstart/Quickstart-30b4c8d1a1b0.json"
```

```
python gunicorn-flask/google/analytics_data/snippets/quickstart.py
```