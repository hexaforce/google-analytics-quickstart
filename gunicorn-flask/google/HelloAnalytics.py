"""A simple example of how to access the Google Analytics API."""

from apiclient import discovery
from oauth2client.service_account import ServiceAccountCredentials
import json

SCOPES = ['https://www.googleapis.com/auth/analytics.readonly']
KEY_FILE_LOCATION = '/Users/hexaforce/google-analytics-quickstart/poc-project-378209-692a4ccc16e8.json'
credentials = ServiceAccountCredentials.from_json_keyfile_name(KEY_FILE_LOCATION, SCOPES)

def get_first_profile_id(service):
    # Use the Analytics service object to get the first profile id.

    # Get a list of all Google Analytics accounts for this user
    accounts = service.management().accounts().list().execute()
    # print(json.dumps(accounts, indent=2))

    if accounts.get('items'):
        # Get the first Google Analytics account.
        account = accounts.get('items')[0].get('id')

        # Get a list of all the properties for the first account.
        properties = service.management().webproperties().list(accountId=account).execute()
        # print(json.dumps(properties, indent=2))

        if properties.get('items'):
            # Get the first property id.
            property = properties.get('items')[0].get('id')

            # Get a list of all views (profiles) for the first property.
            profiles = service.management().profiles().list(accountId=account, webPropertyId=property).execute()
            # print(json.dumps(profiles, indent=2))

            if profiles.get('items'):
                # return the first view (profile) id.
                return profiles.get('items')[0].get('id')

    return None


def main():
    # Authenticate and construct service.
    service = discovery.build('analytics', 'v3', credentials=credentials)
    profile_id = get_first_profile_id(service)
    result = service.data().ga().get( ids=f'ga:{profile_id}', start_date='7daysAgo', end_date='today', metrics='ga:sessions').execute()
    print(json.dumps(result, indent=2))

if __name__ == '__main__':
    main()