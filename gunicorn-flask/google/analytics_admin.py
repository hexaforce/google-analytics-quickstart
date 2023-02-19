from flask import Flask, Blueprint, request, jsonify
from google.analytics.admin import AnalyticsAdminServiceClient
from google.analytics.admin_v1alpha.types import ListPropertiesRequest
from google.analytics.admin_v1alpha.services.analytics_admin_service.pagers import ListPropertiesPager


analytics_admin_api = Blueprint('analytics_admin_api', __name__, url_prefix='/analytics-admin')
@analytics_admin_api.route('/flask-health-check', methods=['GET'])
def list_user():
	return "successadmin2"

def list_properties(account_id: str, transport: str = None) -> ListPropertiesPager:
    """
    Lists Google Analytics 4 properties under the specified parent account
    that are available to the current user.

    Args:
        account_id(str): The Google Analytics account ID.
        transport(str): The transport to use. For example, "grpc"
            or "rest". If set to None, a transport is chosen automatically.
    """
    client = AnalyticsAdminServiceClient(transport=transport)
    results = client.list_properties(
        ListPropertiesRequest(filter=f"parent:accounts/{account_id}", show_deleted=True)
    )

    # print(type(results))
    # print("Result:")
    # for property_ in results:
    #     print(property_)
    #     print()
    return results