import os
import json
from flask import Flask, Blueprint, request, jsonify
from db_models import db
from db_resource_api import resource_api 
from analytics_data_api import analytics_data_api
from analytics_admin_api import analytics_admin_api
from google.analytics.data_v1beta import gapic_version as data_v1beta_package_version
from google.analytics.admin_v1alpha import gapic_version as admin_v1alpha_package_version
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
resource_api.init_app(app)

# regist google analytics blueprint
google_api = Blueprint('analytics_api', __name__, url_prefix='/api')
google_api.register_blueprint(analytics_data_api)
google_api.register_blueprint(analytics_admin_api)
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

# responding to server env setting
@app.route('/api/info')
def server_info():
  application_credential = json.load(open(os.getenv("GOOGLE_APPLICATION_CREDENTIALS"), 'r'))
  return {
     'project_id': application_credential['project_id'],
     'client_id': application_credential['client_id'],
     'client_email': application_credential['client_email'],
     'admin_v1alpha_package_version': admin_v1alpha_package_version.__version__,
     'data_v1beta_package_version': data_v1beta_package_version.__version__,
  }

if __name__ == '__main__':
    app.run(debug = True)
