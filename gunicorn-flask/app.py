import os
import json
from flask import Flask, Blueprint, request, jsonify
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy

from api.analytics import analytics_api
from api.analytics_data import analytics_data_api
from api.analytics_admin import analytics_admin_api

app = Flask(__name__)
app.register_blueprint(analytics_api)
app.register_blueprint(analytics_data_api)
app.register_blueprint(analytics_admin_api)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://{}:{}@{}/{}'.format(
    os.getenv('DB_USER', 'root'),
    os.getenv('DB_PASSWORD', 'db-78n9n'),
    os.getenv('DB_HOST', 'mariadb'),
    os.getenv('DB_NAME', 'analytics')
)
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

# create the DB on demand
@app.before_first_request
def create_tables():
    db.create_all()


class Index(Resource):
    def get(self):
        ret = []
        res = User.query.all()
        for user in res:
            ret.append(
                {
                    'username': user.username,
                    'email': user.email
                }
            )
        return ret, 200

api = Api(app)
api.add_resource(Index, '/api/user')

# bp = Blueprint('api', __name__, url_prefix='/api')
# @bp.route('/flask-health-check', methods=['GET'])
# def list_user():
# 	return "success2"

@app.route('/')
def hello():
	return "Hello World!"

@app.route('/cache-me')
def cache():
	return "nginx will cache this response"

@app.route('/info')
def info():

	resp = {
		'connecting_ip': request.headers['X-Real-IP'],
		'proxy_ip': request.headers['X-Forwarded-For'],
		'host': request.headers['Host'],
		'user-agent': request.headers['User-Agent']
	}

	return jsonify(resp)

@app.route('/flask-health-check')
def flask_health_check():
	return "success1"
