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

"""Google Analytics Admin API sample application updates the Google Ads link.

See https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/properties.googleAdsLinks/update
for more information.
"""
# [START analyticsadmin_properties_google_ads_links_update]
from google.analytics.admin import AnalyticsAdminServiceClient
from google.analytics.admin_v1alpha.types import GoogleAdsLink
from google.protobuf.field_mask_pb2 import FieldMask


def run_sample():
    """Runs the sample."""

    # !!! ATTENTION !!!
    #  Running this sample may change/delete your Google Analytics account
    #  configuration. Make sure to not use the Google Analytics property ID from
    #  your production environment below.

    # TODO(developer): Replace this variable with your Google Analytics 4
    #  property ID (e.g. "123456") before running the sample.
    property_id = "YOUR-GA4-PROPERTY-ID"

    # TODO(developer): Replace this variable with your Google Analytics Ads
    #  link ID (e.g. "123456") before running the sample.
    google_ads_link_id = "YOUR-GOOGLE-ADS-LINK-ID"

    update_google_ads_link(property_id, google_ads_link_id)


def update_google_ads_link(
    property_id: str, google_ads_link_id: str, transport: str = None
):
    """
    Updates the Google Ads link.

    Args:
        property_id(str): The Google Analytics Property ID.
        google_ads_link_id(str): The Google Analytics Ads Link Id.
        transport(str): The transport to use. For example, "grpc"
            or "rest". If set to None, a transport is chosen automatically.
    """
    client = AnalyticsAdminServiceClient(transport=transport)
    # This call updates the adsPersonalizationEnabled setting of the
    # Google Ads link as indicated by the value of the `update_mask` field.
    # The Google Ads link to update is specified in the `name` field of the
    # `Google AdsLink` instance.
    google_ads_link = client.update_google_ads_link(
        google_ads_link=GoogleAdsLink(
            name=f"properties/{property_id}/googleAdsLinks/{google_ads_link_id}",
            ads_personalization_enabled=False,
        ),
        update_mask=FieldMask(paths=["ads_personalization_enabled"]),
    )

    print("Result:")
    print(google_ads_link)


# [END analyticsadmin_properties_google_ads_links_update]


if __name__ == "__main__":
    run_sample()
