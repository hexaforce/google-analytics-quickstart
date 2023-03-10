#!/usr/bin/env python

# Copyright 2021 Google LLC All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Google Analytics Admin API sample application which prints the details for
the account user link using a batch call.

See https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts.userLinks/batchGet
for more information.
"""
# [START analyticsadmin_accounts_user_links_batch_get]
from google.analytics.admin import AnalyticsAdminServiceClient
from google.analytics.admin_v1alpha.types import BatchGetUserLinksRequest


def run_sample():
    """Runs the sample."""
    # TODO(developer): Replace this variable with your Google Analytics
    #  account ID (e.g. "123456") before running the sample.
    account_id = "YOUR-GA-ACCOUNT-ID"

    # TODO(developer): Replace this variable with your Google Analytics
    #  account user link ID (e.g. "123456") before running the sample.
    account_user_link_id = "YOUR-ACCOUNT-USER-LINK-ID"

    batch_get_account_user_link(account_id, account_user_link_id)


def batch_get_account_user_link(
    account_id: str, account_user_link_id: str, transport: str = None
):
    """
    Retrieves details for the account user link using a batch call.

    Args:
        account_id(str): The Google Analytics Account ID.
        account_user_link_id(str): Google Analytics account user link ID.
        transport(str): The transport to use. For example, "grpc"
            or "rest". If set to None, a transport is chosen automatically.
    """
    client = AnalyticsAdminServiceClient(transport=transport)
    response = client.batch_get_user_links(
        BatchGetUserLinksRequest(
            parent=f"accounts/{account_id}",
            names=[f"accounts/{account_id}/userLinks/{account_user_link_id}"],
        )
    )

    print("Result:")
    for user_link in response.user_links:
        print(user_link)
        print()


# [END analyticsadmin_accounts_user_links_batch_get]


if __name__ == "__main__":
    run_sample()
