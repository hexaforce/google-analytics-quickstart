"""Hello Analytics Reporting API V4."""

from apiclient import discovery
from oauth2client.service_account import ServiceAccountCredentials
import json

# https://www.googleapis.com/auth/analytics.readonly	アナリティクス API に対する読み取り専用のアクセス。
# https://www.googleapis.com/auth/analytics.edit	Google アナリティクスの管理エンティティの編集。
# https://www.googleapis.com/auth/analytics.manage.users	Google アナリティクス アカウントのユーザー権限の表示と管理。
# https://www.googleapis.com/auth/analytics.manage.users.readonly	Google アナリティクスのユーザー権限の表示。
SCOPES = ['https://www.googleapis.com/auth/analytics.readonly']
KEY_FILE_LOCATION = '/Users/hexaforce/google-analytics-quickstart/poc-project-378209-692a4ccc16e8.json'
credentials = ServiceAccountCredentials.from_json_keyfile_name(KEY_FILE_LOCATION, SCOPES)

VIEW_ID = '284918370'

def get_report(analytics):
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
          'viewId': VIEW_ID,
          'dateRanges': [{'startDate': '7daysAgo', 'endDate': 'today'}],
          'metrics': [{'expression': 'ga:sessions'}],
          'dimensions': [{'name': 'ga:country'}]
        }]
      }
  ).execute()


def print_response(response):
  """Parses and prints the Analytics Reporting API V4 response.

  Args:
    response: An Analytics Reporting API V4 response.
  """
  for report in response.get('reports', []):
    columnHeader = report.get('columnHeader', {})
    dimensionHeaders = columnHeader.get('dimensions', [])
    metricHeaders = columnHeader.get('metricHeader', {}).get('metricHeaderEntries', [])

    for row in report.get('data', {}).get('rows', []):
      dimensions = row.get('dimensions', [])
      dateRangeValues = row.get('metrics', [])

      for header, dimension in zip(dimensionHeaders, dimensions):
        print(header + ': ', dimension)

      for i, values in enumerate(dateRangeValues):
        print('Date range:', str(i))
        for metricHeader, value in zip(metricHeaders, values.get('values')):
          print(metricHeader.get('name') + ':', value)


def main():
  analytics = discovery.build('analyticsreporting', 'v4', credentials=credentials)
  response = get_report(analytics)
  print(json.dumps(response, indent=2))
  print_response(response)

if __name__ == '__main__':
  main()
