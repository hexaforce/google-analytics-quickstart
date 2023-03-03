from flask import Flask, Blueprint, request, jsonify
from google.analytics.data_v1beta import BetaAnalyticsDataClient
from google.analytics.data_v1beta.types import (
    DateRange,
    Dimension,
    Metric,
    RunReportRequest,
)

from flask import current_app

from google.protobuf.json_format import MessageToDict, MessageToJson

analytics_data_api = Blueprint('analytics_data_api', __name__, url_prefix='/data')

@analytics_data_api.route('/run-report/<property_id>', methods=['POST'])
def run_report(property_id: str):

    print(f"property_id: {property_id}", flush=True)
    post = request.json
    print(f"request: {post}", flush=True)

    dimension_name = post['dimension_name']
    metric_name = post['metric_name']
    start_date = post['start_date']
    end_date = post['end_date']

    client = BetaAnalyticsDataClient()

    response = client.run_report(
      RunReportRequest(
        property=f"properties/{property_id}",
        dimensions=[Dimension(name=dimension_name)],
        metrics=[Metric(name=metric_name)],
        date_ranges=[DateRange(start_date=start_date, end_date=end_date)],
      )
    )

    print(f"response: {MessageToJson(response._pb)}", flush=True)
    return MessageToDict(response._pb)