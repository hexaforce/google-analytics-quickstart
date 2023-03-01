from flask import Flask, Blueprint, request, jsonify
from google.analytics.data_v1beta import BetaAnalyticsDataClient
from google.analytics.data_v1beta.types import (
    DateRange,
    Dimension,
    Metric,
    RunReportRequest,
)
import os
import json
from flask import current_app

analytics_data_api = Blueprint('analytics_data_api', __name__, url_prefix='/data')

@analytics_data_api.route('/run-report', methods=['POST'])
def run_report():

    # GOOGLE_APPLICATION_CREDENTIALS = os.getenv("GOOGLE_APPLICATION_CREDENTIALS", "client_secrets.json")
    # json_open = open(GOOGLE_APPLICATION_CREDENTIALS, 'r')
    # json_load = json.load(json_open)
    # client_email = json_load['client_email']

    # print(f"client_email: {client_email}")

    req = request.json
    current_app.logger.info(req)

    client = BetaAnalyticsDataClient()

    request = RunReportRequest(
        property=f"properties/{req.property_id}",
        # dimensions=[Dimension(name="browser")],
        dimensions=[Dimension(name=req.Dimension)],
        # metrics=[Metric(name="screenPageViews")],
        metrics=[Metric(name=req.Metric)],
        # date_ranges=[DateRange(start_date="14daysAgo", end_date="today")],
        date_ranges=[DateRange(start_date=req.start_date, end_date=req.end_date)],
    )

    response = client.run_report(request)
    # print("################### Report result:")
    # for row in response.rows:
    #     print(row.dimension_values[0].value, row.metric_values[0].value)
    return response
