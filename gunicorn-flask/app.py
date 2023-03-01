import os
from flask import Flask, Blueprint, request, jsonify
from model import db
from restful import api 
# from .google import analytics_api, analytics_data_api, analytics_admin_api
from analytics_data import analytics_data_api

from sqlalchemy.sql import text, func

basedir = os.path.abspath(os.path.dirname(__file__))

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

# regist google analytics blueprint
google_api = Blueprint('analytics_api', __name__, url_prefix='/api')
# google_api.register_blueprint(analytics_api)
google_api.register_blueprint(analytics_data_api)
# google_api.register_blueprint(analytics_admin_api)
app.register_blueprint(google_api)

# create the DB on demand
@app.before_first_request
def create_tables():
    db.create_all()

# responding to health checks
@app.route('/flask-health-check')
def flask_health_check():
  db.session.execute(text('SELECT now()'))
  return "success"

if __name__ == '__main__':
    app.run(debug = True)
