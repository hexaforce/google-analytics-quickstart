from flask import Flask, Blueprint, request, jsonify

from serializers import AlchemyEncoder
from model import db, User

analytics_data_api = Blueprint('analytics_data_api', __name__, url_prefix='/analytics-data')
@analytics_data_api.route('/flask-health-check', methods=['GET'])
def list_user():
  res = User.query.all()
  return res
