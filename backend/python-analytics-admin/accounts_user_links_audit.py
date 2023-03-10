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

"""Google Analytics Admin API sample application which prints all user links on
an account.

See https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts.userLinks/audit
for more information.
"""
# [START analyticsadmin_accounts_user_links_audit]
from google.analytics.admin import AnalyticsAdminServiceClient
from google.analytics.admin_v1alpha.types import AuditUserLinksRequest


def run_sample():
    """Runs the sample."""
    # TODO(developer): Replace this variable with your Google Analytics
    #  account ID (e.g. "123456") before running the sample.
    account_id = "YOUR-GA-ACCOUNT-ID"
    audit_account_user_links(account_id)


def audit_account_user_links(account_id: str, transport: str = None):
    """
    Lists all user links on an account, including implicit ones that come
    from effective permissions granted by groups or organization admin roles.

    Args:
        account_id(str): The Google Analytics Account ID.
        transport(str): The transport to use. For example, "grpc"
            or "rest". If set to None, a transport is chosen automatically.
    """
    client = AnalyticsAdminServiceClient(transport=transport)

    print("Result:")
    for user_link in client.audit_user_links(
        AuditUserLinksRequest(parent=f"accounts/{account_id}")
    ):
        print(f"Resource name: {user_link.name}")
        print(f"Email address: {user_link.email_address}")
        for direct_role in user_link.direct_roles:
            print(f"Direct role: {direct_role}")

        for effective_role in user_link.effective_roles:
            print(f"Effective role: {effective_role}")
        print()


# [END analyticsadmin_accounts_user_links_audit]


if __name__ == "__main__":
    run_sample()
