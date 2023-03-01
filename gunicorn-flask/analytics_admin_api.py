from flask import Flask, Blueprint, request, jsonify
from google.analytics.admin import AnalyticsAdminServiceClient
from google.analytics.admin_v1alpha.types import ListPropertiesRequest
from google.analytics.admin_v1alpha.services.analytics_admin_service.pagers import ListAccountsPager


analytics_admin_api = Blueprint('analytics_admin_api', __name__, url_prefix='/admin')


@analytics_admin_api.route('/list-accounts', methods=['GET'])
def list_accounts(transport: str = None):
    client = AnalyticsAdminServiceClient(transport=transport)
    results = client.list_accounts()
    print("Result:")
    for account in results:
        print(account)
    return "OK"

# def print_account(account: str):
#     """Prints account data."""
#     print(f"Resource name: {account.name}")
#     print(f"Display name: {account.display_name}")
#     print(f"Region code: {account.region_code}")
#     print(f"Create time: {account.create_time}")
#     print(f"Update time: {account.update_time}")

# def list_properties(account_id: str, transport: str = None) -> ListPropertiesPager:
#     """
#     Lists Google Analytics 4 properties under the specified parent account
#     that are available to the current user.

#     Args:
#         account_id(str): The Google Analytics account ID.
#         transport(str): The transport to use. For example, "grpc"
#             or "rest". If set to None, a transport is chosen automatically.
#     """
#     client = AnalyticsAdminServiceClient(transport=transport)
#     results = client.list_properties(
#         ListPropertiesRequest(filter=f"parent:accounts/{account_id}", show_deleted=True)
#     )

#     # print(type(results))
#     # print("Result:")
#     # for property_ in results:
#     #     print(property_)
#     #     print()
#     return results