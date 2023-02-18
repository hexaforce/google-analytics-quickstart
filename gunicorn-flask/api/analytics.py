from flask import Flask, Blueprint, request, jsonify

from serializers import AlchemyEncoder

analytics_api = Blueprint('analytics_api', __name__, url_prefix='/api/analytics')
@analytics_api.route('/flask-health-check', methods=['GET'])
def list_user():
	return "success2analytics"
