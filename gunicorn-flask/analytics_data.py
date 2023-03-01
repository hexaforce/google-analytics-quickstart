from flask import Flask, Blueprint, request, jsonify


from model import db, Actor

analytics_data_api = Blueprint('analytics_data_api', __name__, url_prefix='/analytics-data')
@analytics_data_api.route('/flask-health-check', methods=['GET'])
def list_user():
  res = Actor.query.all()
  return res
