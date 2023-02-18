from .analytics import analytics_api
from .analytics_data import analytics_data_api
from .analytics_admin import analytics_admin_api
from flask import Flask, Blueprint, request, jsonify

analytics = Blueprint('analytics_api', __name__, url_prefix='/api')
analytics.register_blueprint(analytics_api)
analytics.register_blueprint(analytics_data_api)
analytics.register_blueprint(analytics_admin_api)
