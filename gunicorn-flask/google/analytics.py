from flask import Flask, Blueprint, request, jsonify

from apiclient import discovery
from oauth2client.service_account import ServiceAccountCredentials
import json

# https://www.googleapis.com/auth/analytics.readonly	アナリティクス API に対する読み取り専用のアクセス。
# https://www.googleapis.com/auth/analytics.edit	Google アナリティクスの管理エンティティの編集。
# https://www.googleapis.com/auth/analytics.manage.users	Google アナリティクス アカウントのユーザー権限の表示と管理。
# https://www.googleapis.com/auth/analytics.manage.users.readonly	Google アナリティクスのユーザー権限の表示。

SCOPES = ['https://www.googleapis.com/auth/analytics.readonly']
KEY_FILE_LOCATION = 'gunicorn-flask/google/poc-project-378209-692a4ccc16e8.json'
credentials = ServiceAccountCredentials.from_json_keyfile_name(KEY_FILE_LOCATION, SCOPES)

VIEW_ID = '284918370'

analytics_api = Blueprint('analytics_api', __name__, url_prefix='/analytics')

@analytics_api.route('/v3', methods=['GET'])
def analytics_v3()-> dict:
    # Authenticate and construct service.
    service = discovery.build('analytics', 'v3', credentials=credentials)
    profile_id = get_first_profile_id(service)
    result = service.data().ga().get( ids=f'ga:{profile_id}', start_date='7daysAgo', end_date='today', metrics='ga:sessions').execute()
    return result


@analytics_api.route('/v4', methods=['GET'])
def analytics_v4()-> dict:
    # Authenticate and construct service.
    analytics = discovery.build('analyticsreporting', 'v4', credentials=credentials)
    response = get_report(analytics, VIEW_ID)
    print(json.dumps(response, indent=2))
    return response


def get_first_profile_id(service) -> str:
    # Use the Analytics service object to get the first profile id.

    # Get a list of all Google Analytics accounts for this user
    accounts = service.management().accounts().list().execute()
    print(json.dumps(accounts, indent=2))

    if accounts.get('items'):
        # Get the first Google Analytics account.
        account = accounts.get('items')[0].get('id')

        # Get a list of all the properties for the first account.
        properties = service.management().webproperties().list(accountId=account).execute()
        print(json.dumps(properties, indent=2))

        if properties.get('items'):
            # Get the first property id.
            property = properties.get('items')[0].get('id')

            # Get a list of all views (profiles) for the first property.
            profiles = service.management().profiles().list(accountId=account, webPropertyId=property).execute()
            print(json.dumps(profiles, indent=2))

            if profiles.get('items'):
                # return the first view (profile) id.
                return profiles.get('items')[0].get('id')

    return None


def get_report(analytics, viewId):
  """Queries the Analytics Reporting API V4.

  Args:
    analytics: An authorized Analytics Reporting API V4 service object.
  Returns:
    The Analytics Reporting API V4 response.
  """
  return analytics.reports().batchGet(
      body={
        'reportRequests': [
        {
          'viewId': viewId,
          'dateRanges': [{'startDate': '7daysAgo', 'endDate': 'today'}],
          'metrics': [{'expression': 'ga:sessions'}],
          'dimensions': [{'name': 'ga:country'}]
        }]
      }
  ).execute()


if __name__ == '__main__':
  analytics_v3()
  # analytics_v4()
