from flask import Flask, Blueprint, request, jsonify
from typing import Any
from google.analytics.admin import AnalyticsAdminServiceClient
from google.analytics.admin_v1alpha.types import ListPropertiesRequest
from google.analytics.admin_v1alpha.services.analytics_admin_service.pagers import ListFirebaseLinksPager, ListAccountsPager,ListPropertiesPager,ListUserLinksPager,ListDataStreamsPager,ListConversionEventsPager,ListGoogleAdsLinksPager

from google.analytics.admin_v1alpha.types import ListPropertiesRequest

from google.protobuf.json_format import MessageToDict, MessageToJson
from flask import current_app

analytics_admin_api = Blueprint('analytics_admin_api', __name__, url_prefix='/admin')


@analytics_admin_api.route('/list-accounts', methods=['GET'])
def list_accounts() -> ListAccountsPager:
    client = AnalyticsAdminServiceClient()
    results = client.list_accounts()
    print(MessageToJson(results._pb), flush=True)
    return MessageToDict(results._pb)


@analytics_admin_api.route('/list-properties/<account_id>', methods=['GET'])
def list_properties(account_id: str) -> ListPropertiesPager:
    client = AnalyticsAdminServiceClient()
    results = client.list_properties(
        ListPropertiesRequest(filter=f"parent:accounts/{account_id}", show_deleted=True)
    )
    print(MessageToJson(results._pb), flush=True)
    return MessageToDict(results._pb)


@analytics_admin_api.route('/list-data-streams/<property_id>', methods=['GET'])
def list_data_streams(property_id: str)->ListDataStreamsPager:
    client = AnalyticsAdminServiceClient()
    results = client.list_data_streams(parent=f"properties/{property_id}")
    print(MessageToJson(results._pb), flush=True)
    return MessageToDict(results._pb)


@analytics_admin_api.route('/list-user-links/<property_id>', methods=['GET'])
def list_user_links(property_id: str) -> ListUserLinksPager:
    client = AnalyticsAdminServiceClient()
    results = client.list_user_links(parent=f"properties/{property_id}")
    print(MessageToJson(results._pb), flush=True)
    return MessageToDict(results._pb)


@analytics_admin_api.route('/list-firebase-links/<property_id>', methods=['GET'])
def list_firebase_links(property_id: str) -> ListFirebaseLinksPager:
    client = AnalyticsAdminServiceClient()
    results = client.list_firebase_links(parent=f"properties/{property_id}")
    print(MessageToJson(results._pb), flush=True)
    return MessageToDict(results._pb)


@analytics_admin_api.route('/list-google-ads-links/<property_id>', methods=['GET'])
def list_google_ads_links(property_id: str) -> ListGoogleAdsLinksPager:
    client = AnalyticsAdminServiceClient()
    results = client.list_google_ads_links(parent=f"properties/{property_id}")
    print(MessageToJson(results._pb), flush=True)
    return MessageToDict(results._pb)


@analytics_admin_api.route('/list-conversion-events/<property_id>', methods=['GET'])
def list_conversion_events(property_id: str) -> ListConversionEventsPager:
    client = AnalyticsAdminServiceClient()
    results = client.list_conversion_events(parent=f"properties/{property_id}")
    print(MessageToJson(results._pb), flush=True)
    return MessageToDict(results._pb)


@analytics_admin_api.route('/list-measurement-protocol-secrets/<property_id>/<stream_id>', methods=['GET'])
def list_measurement_protocol_secrets(property_id: str, stream_id: str) -> ListConversionEventsPager:
    client = AnalyticsAdminServiceClient()
    results = client.list_measurement_protocol_secrets(
        parent=f"properties/{property_id}/dataStreams/{stream_id}"
    )
    print(MessageToJson(results._pb), flush=True)
    return MessageToDict(results._pb)
