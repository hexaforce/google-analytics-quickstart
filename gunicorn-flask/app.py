import os
from flask import Flask, request, jsonify
from model import db
from restful import api 
from google.analytics import analytics_api
from google.analytics_data import analytics_data_api
from google.analytics_admin import analytics_admin_api

SQLALCHEMY_DATABASE_URI='mysql+pymysql://{}:{}@{}/{}'.format(
    os.getenv('DB_USER', 'root'),
    os.getenv('DB_PASSWORD', 'db-78n9n'),
    os.getenv('DB_HOST', 'mariadb'),
    os.getenv('DB_NAME', 'analytics')
)

# create the app
app = Flask(__name__)

# configure the MariaDB database
app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# initialize the app with the Database extension
db.init_app(app)

# initialize the app with the Resource API extension
api.init_app(app)

# register_blueprint
app.register_blueprint(analytics_api)
app.register_blueprint(analytics_data_api)
app.register_blueprint(analytics_admin_api)

# create the DB on demand
@app.before_first_request
def create_tables():
    db.create_all()

# @app.route('/')
# def hello():
# 	return "Hello World!"

# @app.route('/cache-me')
# def cache():
# 	return "nginx will cache this response"

# @app.route('/info')
# def info():

# 	resp = {
# 		'connecting_ip': request.headers['X-Real-IP'],
# 		'proxy_ip': request.headers['X-Forwarded-For'],
# 		'host': request.headers['Host'],
# 		'user-agent': request.headers['User-Agent']
# 	}

# 	return jsonify(resp)

@app.route('/flask-health-check')
def flask_health_check():
	return "success"
