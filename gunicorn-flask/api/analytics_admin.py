from flask import Flask, Blueprint, request, jsonify

from serializers import AlchemyEncoder

analytics_admin_api = Blueprint('analytics_admin_api', __name__, url_prefix='/api/analytics-admin')
@analytics_admin_api.route('/flask-health-check', methods=['GET'])
def list_user():
	return "successadmin2"
