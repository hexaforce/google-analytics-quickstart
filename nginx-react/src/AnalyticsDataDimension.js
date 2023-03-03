const Dimension = [
  {
    name: "achievementId",
    ui_name: "Achievement ID",
    UI名: "実績 ID",
    説明: "イベントでのゲーム内の実績 ID。イベント パラメータ「achievement_id」によってデータが入力されます。"
  },
  {
    name: "adFormat",
    ui_name: "Ad format",
    UI名: "広告フォーマット",
    説明: "広告のデザインと掲載場所を示します。一般的なフォーマットとしては、「インタースティシャル」、「バナー」、「リワード」、「ネイティブ アドバンス」などがあります。"
  },
  {
    name: "adSourceName",
    ui_name: "Ad source",
    UI名: "広告ソース",
    説明: "広告を配信したソース ネットワーク。一般的なソースとしては、「AdMob ネットワーク」、「Liftoff」、「Facebook Audience Network」、「メディエーション向け自社広告」などがあります。"
  },
  {
    name: "adUnitName",
    ui_name: "Ad unit",
    UI名: "広告ユニット",
    説明: "この広告ユニットを説明するために自身で指定する名前。広告ユニットは、ユーザーに広告を表示するために、アプリ内に配置する広告枠です。"
  },
  {
    name: "appVersion",
    ui_name: "App version",
    UI名: "アプリのバージョン",
    説明: "アプリの versionName（Android の場合）または short bundle version（iOS の場合）。"
  },
  {
    name: "audienceId",
    ui_name: "Audience ID",
    UI名: "オーディエンス ID",
    説明: "オーディエンスの数値識別子。レポートの期間に属するユーザーの情報がレポートされます。現在のユーザーの行動によって、レポート済みのオーディエンスから変更されることはありません。"
  },
  {
    name: "audienceName",
    ui_name: "Audience name",
    UI名: "オーディエンス名",
    説明: "オーディエンスに指定した名前。レポートの期間に属するユーザーの情報がレポートされます。現在のユーザーの行動によって、レポート済みのオーディエンスから変更されることはありません。"
  },
  {
    name: "brandingInterest",
    ui_name: "Interests",
    UI名: "興味 / 関心",
    説明: "購入プロセスの上位の段階にいるユーザーが示す興味 / 関心。ユーザーは複数のインタレスト カテゴリでカウントできます。例: 「買い物好き」、「ライフスタイル、趣味/ペット愛好家」、「旅行/旅行好き/ビーチリゾート」。"
  },
  {
    name: "browser",
    ui_name: "Browser",
    UI名: "ブラウザ",
    説明: "ウェブサイトの閲覧に使用されたブラウザです。"
  },
  {
    name: "campaignId",
    ui_name: "Campaign ID",
    UI名: "キャンペーン ID",
    説明: "マーケティング キャンペーンの ID。コンバージョン イベントでのみ使用されます。Google 広告キャンペーン、手動キャンペーン、その他のキャンペーンが含まれます。"
  },
  {
    name: "campaignName",
    ui_name: "Campaign",
    UI名: "キャンペーン",
    説明: "マーケティング キャンペーンの名前。コンバージョン イベントでのみ使用されます。Google 広告キャンペーン、手動キャンペーン、その他のキャンペーンが含まれます。"
  },
  {
    name: "character",
    ui_name: "Character",
    UI名: "文字",
    説明: "イベント時のプレーヤーのゲーム内キャラクター。イベント パラメータ「文字」によってデータが入力されます。"
  },
  {
    name: "city",
    ui_name: "City",
    UI名: "都市",
    説明: "ユーザー アクションが発生した都市です。"
  },
  {
    name: "cityId",
    ui_name: "City ID",
    UI名: "都市 ID",
    説明: "ユーザー アクションが発生した都市の地域 ID。IP アドレスから取得されます。"
  },
  {
    name: "cohort",
    ui_name: "Cohort",
    UI名: "コホート",
    説明: "リクエスト内のコホートの名前。コホートは、いずれかの日または日の間にウェブサイトやアプリの利用を開始したユーザーの集合です。リクエストでコホート名が指定されていない場合、コホートは 0 から始まるインデックス（コホート 0、コホート 1）などで命名されます。"
  },
  {
    name: "cohortNthDay",
    ui_name: "Daily cohort",
    UI名: "日次コホート",
    説明: "コホート内の first_Date に対するオフセット。たとえば、開始日と終了日が 2020 年 3 月 1 日のコホートを選択した場合、日付 2020-03-02 の mydatasetNthDay は 0001 になります。"
  },
  {
    name: "cohortNthMonth",
    ui_name: "Monthly cohort",
    UI名: "月次コホート",
    説明: "コホートの user の firstSessionDate に対する月単位のオフセット。月境界は暦月の境界に揃えられます。たとえば、2020 年 3 月に開始日と終了日を指定してコホートを選択した場合、2020 年 4 月の日付の コホート NthMonth は 0001 になります。"
  },
  {
    name: "cohortNthWeek",
    ui_name: "Weekly cohort",
    UI名: "週次コホート",
    説明: "コホート内の first_Date に対する週のオフセット。週は日曜日に始まり、土曜日に終わります。たとえば、開始日と終了日が 2020 年 11 月 8 日～ 2020 年 11 月 14 日の範囲でコホートが選択されている場合、2020 年 11 月 15 日～ 2020 年 11 月 21 日の期間では、コホート NthWeek は 0001 になります。"
  },
  {
    name: "contentGroup",
    ui_name: "Content group",
    UI名: "コンテンツ グループ",
    説明: "公開済みコンテンツのアイテムに適用されるカテゴリ。イベント パラメータ「content_group」によってデータが入力されます。"
  },
  {
    name: "contentId",
    ui_name: "Content ID",
    UI名: "コンテンツ ID",
    説明: "選択したコンテンツの識別子。イベント パラメータ「content_id」によってデータが入力されます。"
  },
  {
    name: "contentType",
    ui_name: "Content type",
    UI名: "コンテンツ タイプ",
    説明: "選択したコンテンツのカテゴリ。イベント パラメータ「content_type」によってデータが入力されます。"
  },
  {
    name: "continent",
    ui_name: "Continent",
    UI名: "大陸",
    説明: "ユーザー アクションが発生した大陸。例: 「南北アメリカ」、「アジア」"
  },
  {
    name: "continentId",
    ui_name: "Continent ID",
    UI名: "大陸 ID",
    説明: "ユーザー アクションが発生した大陸の地域 ID。IP アドレスから取得されます。"
  },
  {
    name: "country",
    ui_name: "Country",
    UI名: "国",
    説明: "ユーザー アクションが発生した国です。"
  },
  {
    name: "countryId",
    ui_name: "Country ID",
    UI名: "国 ID",
    説明: "ユーザー アクションが発生した国の地域 ID。IP アドレスから取得されます。ISO 3166-1 alpha-2 の規格に従ってフォーマットされています。"
  },
  {
    name: "date",
    ui_name: "Date",
    UI名: "日付",
    説明: "イベントの日付（YYYYMMDD の形式で表記）。"
  },
  {
    name: "dateHour",
    ui_name: "Date + hour (YYYYMMDDHH)",
    UI名: "日時（YYYYMMDDHH）",
    説明: "日付と時刻を組み合わせた値（YYYYMMDDHH 形式）。"
  },
  {
    name: "dateHourMinute",
    ui_name: "Date hour and minute",
    UI名: "日付、時、分",
    説明: "YYYYMMDDHHMM 形式の日付、時間、分を合わせた値。"
  },
  {
    name: "day",
    ui_name: "Day",
    UI名: "日",
    説明: "月内の日付（01～31 の 2 桁の数字）。"
  },
  {
    name: "dayOfWeek",
    ui_name: "Day of week",
    UI名: "曜日",
    説明: "曜日です。日曜日を週の初日として [0,6] の範囲の値を返します。"
  },
  {
    name: "defaultChannelGroup",
    ui_name: "Default channel group",
    UI名: "デフォルト チャネル グループ",
    説明: "コンバージョンのデフォルトのチャネル グループは、主に参照元とメディアに基づいています。「ノーリファラー」、「オーガニック検索」、「有料ソーシャル」、「オーガニック ソーシャル」、「メール」、「アフィリエイト」、「リファーラル」、「有料検索」、「動画」、「ディスプレイ」などの列挙値。"
  },
  {
    name: "deviceCategory",
    ui_name: "Device category",
    UI名: "デバイス カテゴリ",
    説明: "端末の種類（パソコン、タブレット、またはモバイル）です。"
  },
  {
    name: "deviceModel",
    ui_name: "Device model",
    UI名: "デバイスのモデル",
    説明: "モバイル デバイスの機種（iPhone 10.6 など）。"
  },
  {
    name: "eventName",
    ui_name: "Event name",
    UI名: "イベント名",
    説明: "イベントの名前。"
  },
  {
    name: "fileExtension",
    ui_name: "File extension",
    UI名: "ファイル拡張子",
    説明: "ダウンロードしたファイルの拡張子（pdf、txt など）。拡張計測機能が有効になっている場合は自動的に入力されます。イベント パラメータ「file_extension」によってデータが入力されます。"
  },
  {
    name: "fileName",
    ui_name: "File name",
    UI名: "ファイル名",
    説明: "ダウンロードしたファイルのページパス（/menus/dinner-menu.pdf など）。拡張計測機能が有効になっている場合は自動的に入力されます。イベント パラメータ「file_name」によってデータが入力されます。"
  },
  {
    name: "firstSessionDate",
    ui_name: "First session date",
    UI名: "最初のセッションの日付",
    説明: "ユーザーの最初のセッションが発生した日付（YYYYMMDD 形式）。"
  },
  {
    name: "firstUserCampaignId",
    ui_name: "First user campaign ID",
    UI名: "最初のユーザーのキャンペーン ID",
    説明: "ユーザーを最初に獲得したマーケティング キャンペーンの ID。Google 広告キャンペーン、手動キャンペーン、その他のキャンペーンが含まれます。"
  },
  {
    name: "firstUserCampaignName",
    ui_name: "First user campaign",
    UI名: "最初のユーザーのキャンペーン",
    説明: "ユーザーを最初に獲得したマーケティング キャンペーンの名前。Google 広告キャンペーン、手動キャンペーン、その他のキャンペーンが含まれます。"
  },
  {
    name: "firstUserDefaultChannelGroup",
    ui_name: "First user default channel group",
    UI名: "最初のユーザーのデフォルト チャネル グループ",
    説明: "ユーザーを最初に獲得したデフォルトのチャネル グループ。デフォルトのチャネル グループは主に参照元とメディアに基づいています。「ノーリファラー」、「オーガニック検索」、「有料ソーシャル」、「オーガニック ソーシャル」、「メール」、「アフィリエイト」、「リファーラル」、「有料検索」、「動画」、「ディスプレイ」などの列挙値。"
  },
  {
    name: "firstUserGoogleAdsAccountName",
    ui_name: "First user Google Ads account name",
    UI名: "ユーザーの最初の Google 広告アカウント名",
    説明: "ユーザーを最初に獲得した Google 広告のアカウント名。"
  },
  {
    name: "firstUserGoogleAdsAdGroupId",
    ui_name: "First user Google Ads ad group ID",
    UI名: "最初のユーザーの Google 広告の広告グループ ID",
    説明: "ユーザーを最初に獲得した Google 広告の広告グループ ID。"
  },
  {
    name: "firstUserGoogleAdsAdGroupName",
    ui_name: "First user Google Ads ad group name",
    UI名: "最初のユーザーの Google 広告の広告グループ名",
    説明: "ユーザーを最初に獲得した Google 広告の広告グループ名。"
  },
  {
    name: "firstUserGoogleAdsAdNetworkType",
    ui_name: "First user Google Ads ad network type",
    UI名: "最初のユーザーの Google 広告の広告ネットワーク タイプ",
    説明: "ユーザーを最初に獲得した広告ネットワーク。「Google 検索」、「検索パートナー」、「Google ディスプレイ ネットワーク」、「YouTube 検索」、「YouTube 動画」、「クロスネットワーク」、「ソーシャル」、「（ユニバーサル キャンペーン）」を含む列挙型。"
  },
  {
    name: "firstUserGoogleAdsCampaignId",
    ui_name: "First user Google Ads campaign ID",
    UI名: "ユーザーの最初の Google 広告の広告キャンペーン ID",
    説明: "ユーザーを最初に獲得した Google 広告のマーケティング キャンペーンの ID。"
  },
  {
    name: "firstUserGoogleAdsCampaignName",
    ui_name: "First user Google Ads campaign",
    UI名: "ユーザーの最初の Google 広告の広告キャンペーン",
    説明: "ユーザーを最初に獲得した Google 広告のマーケティング キャンペーンの名前。"
  },
  {
    name: "firstUserGoogleAdsCampaignType",
    ui_name: "First user Google Ads campaign type",
    UI名: "ユーザーの最初の Google 広告の広告キャンペーン タイプ",
    説明: "ユーザーを最初に獲得した Google 広告キャンペーンのキャンペーン タイプ。キャンペーン タイプによって、広告の表示先や、Google 広告で使用できる設定が決まります。キャンペーン タイプは、検索、ディスプレイ、ショッピング、動画、ファインド、アプリ、スマート、ホテル、ローカル、P-MAX を含む列挙型です。詳しくは、https://support.google.com/google-ads/answer/2567043 をご覧ください。"
  },
  {
    name: "firstUserGoogleAdsCreativeId",
    ui_name: "First user Google Ads creative ID",
    UI名: "ユーザーの最初の Google 広告クリエイティブ ID",
    説明: "ユーザーを最初に獲得した Google 広告クリエイティブの ID。クリエイティブ ID は個々の広告を識別します。"
  },
  {
    name: "firstUserGoogleAdsCustomerId",
    ui_name: "First user Google Ads customer ID",
    UI名: "ユーザーの最初の Google 広告のお客様 ID",
    説明: "ユーザーを最初に獲得した Google 広告のお客様 ID。Google 広告のお客様 ID は、Google 広告アカウントを一意に識別します。"
  },
  {
    name: "firstUserGoogleAdsKeyword",
    ui_name: "First user Google Ads keyword text",
    UI名: "ユーザーの最初の Google 広告のキーワード テキスト",
    説明: "ユーザーを最初に獲得した、一致したキーワード。キーワードとは、ターゲットとするユーザーに広告を表示するための、商品やサービスを表す語句です。キーワードについて詳しくは、https://support.google.com/google-ads/answer/6323 をご覧ください。"
  },
  {
    name: "firstUserGoogleAdsQuery",
    ui_name: "First user Google Ads query",
    UI名: "ユーザーの最初の Google 広告クエリ",
    説明: "ユーザーを最初に獲得した検索クエリ。"
  },
  {
    name: "firstUserManualAdContent",
    ui_name: "First user manual ad content",
    UI名: "ユーザーの最初の手動広告コンテンツ",
    説明: "ユーザーを最初に獲得した広告コンテンツ。utm_content パラメータによってデータが入力されます。"
  },
  {
    name: "firstUserManualTerm",
    ui_name: "First user manual term",
    UI名: "ユーザーの最初の手動キーワード",
    説明: "ユーザーを最初に獲得したキーワード。utm_term パラメータによってデータが入力されます。"
  },
  {
    name: "firstUserMedium",
    ui_name: "First user medium",
    UI名: "最初のユーザーのメディア",
    説明: "ユーザーを最初に獲得したウェブサイトやアプリ。"
  },
  {
    name: "firstUserSource",
    ui_name: "First user source",
    UI名: "最初のユーザーの参照元",
    説明: "ユーザーを最初に獲得した参照元（ウェブサイトやアプリ）。"
  },
  {
    name: "firstUserSourceMedium",
    ui_name: "First user source / medium",
    UI名: "ユーザーの最初の参照元 / メディア",
    説明: "ディメンション「firstUserSource」と「firstUserMedium」を組み合わせた値。"
  },
  {
    name: "firstUserSourcePlatform",
    ui_name: "First user source platform",
    UI名: "最初のユーザーの参照元プラットフォーム",
    説明: "ユーザーを最初に獲得した参照元プラットフォーム。このフィールドは、UTM を使用するトラフィックでは「Manual」を返すものに依存しないでください。今後の機能リリースでは、このフィールドは「Manual」を返すことから「(not set)」を返すように更新されます。"
  },
  {
    name: "fullPageUrl",
    ui_name: "Full page URL",
    UI名: "ページの完全な URL",
    説明: "アクセスしたウェブページのホスト名、ページパス、クエリ文字列です。たとえば、https://www.example.com/store/contact-us?query_string=true の fullPageUrl 部分は www.example.com/store/contact-us?query_string=true となります。"
  },
  {
    name: "googleAdsAccountName",
    ui_name: "Google Ads account name",
    UI名: "Google 広告のアカウント名",
    説明: "コンバージョン イベントにつながったキャンペーンの Google 広告のアカウント名。Google Ads API の customer.descriptive_name に対応しています。"
  },
  {
    name: "googleAdsAdGroupId",
    ui_name: "Google Ads ad group ID",
    UI名: "Google 広告の広告グループ ID",
    説明: "コンバージョン イベントへの貢献度が割り当てられた広告グループ ID。"
  },
  {
    name: "googleAdsAdGroupName",
    ui_name: "Google Ads ad group name",
    UI名: "Google 広告の広告グループ名",
    説明: "コンバージョン イベントへの貢献度が割り当てられた広告グループ名。"
  },
  {
    name: "googleAdsAdNetworkType",
    ui_name: "Google Ads ad network type",
    UI名: "Google 広告の広告ネットワーク タイプ",
    説明: "コンバージョンの広告ネットワーク タイプ。「Google 検索」、「検索パートナー」、「Google ディスプレイ ネットワーク」、「YouTube 検索」、「YouTube 動画」、「クロスネットワーク」、「ソーシャル」、「（ユニバーサル キャンペーン）」を含む列挙型。"
  },
  {
    name: "googleAdsCampaignId",
    ui_name: "Google Ads campaign ID",
    UI名: "Google 広告の広告キャンペーン ID",
    説明: "コンバージョン イベントへの貢献度が割り当てられた Google 広告キャンペーンのキャンペーン ID。"
  },
  {
    name: "googleAdsCampaignName",
    ui_name: "Google Ads campaign",
    UI名: "Google 広告で作成した広告キャンペーン ; Google 広告の広告キャンペーン（# など文脈に応じて）",
    説明: "コンバージョン イベントへの貢献度が割り当てられた Google 広告キャンペーンのキャンペーン名。"
  },
  {
    name: "googleAdsCampaignType",
    ui_name: "Google Ads campaign type",
    UI名: "Google 広告の広告キャンペーン タイプ",
    説明: "コンバージョン イベントへの貢献度が割り当てられた Google 広告キャンペーンのキャンペーン タイプ。キャンペーン タイプによって、広告の表示先や、Google 広告で使用できる設定が決まります。キャンペーン タイプは、検索、ディスプレイ、ショッピング、動画、ファインド、アプリ、スマート、ホテル、ローカル、P-MAX を含む列挙型です。詳しくは、https://support.google.com/google-ads/answer/2567043 をご覧ください。"
  },
  {
    name: "googleAdsCreativeId",
    ui_name: "Google Ads creative ID",
    UI名: "Google 広告クリエイティブ ID",
    説明: "コンバージョン イベントに関連付けられる Google 広告クリエイティブの ID。クリエイティブ ID は個々の広告を識別します。"
  },
  {
    name: "googleAdsCustomerId",
    ui_name: "Google Ads customer ID",
    UI名: "Google 広告のお客様 ID",
    説明: "コンバージョン イベントにつながったキャンペーンの Google 広告のお客様 ID。Google 広告のお客様 ID は、Google 広告アカウントを一意に識別します。"
  },
  {
    name: "googleAdsKeyword",
    ui_name: "Google Ads keyword text",
    UI名: "Google 広告のキーワード テキスト",
    説明: "コンバージョン イベントにつながった一致したキーワード。キーワードとは、ターゲットとするユーザーに広告を表示するための、商品やサービスを表す語句です。キーワードについて詳しくは、https://support.google.com/google-ads/answer/6323 をご覧ください。"
  },
  {
    name: "googleAdsQuery",
    ui_name: "Google Ads query",
    UI名: "Google 広告クエリ",
    説明: "コンバージョン イベントにつながった検索語句。"
  },
  {
    name: "groupId",
    ui_name: "Group ID",
    UI名: "グループ ID",
    説明: "イベント時のゲーム内プレーヤー グループ ID。イベント パラメータ「group_id」によってデータが入力されます。"
  },
  {
    name: "hostName",
    ui_name: "Hostname",
    UI名: "ホスト名",
    説明: "URL のサブドメイン名とドメイン名が含まれます。たとえば、www.example.com/contact.html のホスト名は www.example.com です。"
  },
  {
    name: "hour",
    ui_name: "Hour",
    UI名: "時間",
    説明: "イベントが記録された 2 桁の時刻。このディメンションの範囲は 0 ～ 23 で、プロパティのタイムゾーンでレポートされます。"
  },
  {
    name: "isConversionEvent",
    ui_name: "Is conversion event",
    UI名: "コンバージョン イベント",
    説明: "イベントがコンバージョンの場合は文字列「true」。イベントは、収集時にコンバージョンとしてマークが付けられます。その後は、イベントのコンバージョン マークの変更が適用されます。Google アナリティクスでは任意のイベントをコンバージョンとしてマークすることができます。一部のイベント（first_open、purchase）は、デフォルトでコンバージョンとしてマークされています。詳しくは、https://support.google.com/analytics/answer/9267568 をご覧ください。"
  },
  {
    name: "itemAffiliation",
    ui_name: "Item affiliation",
    UI名: "アイテムのアフィリエーション",
    説明: "個別のアイテムに関連付けられたアフィリエイト（該当する場合はパートナーまたはベンダー）の名前またはコード。「affiliation」アイテム パラメータによってデータが入力されます。"
  },
  {
    name: "itemBrand",
    ui_name: "Item brand",
    UI名: "アイテムのブランド",
    説明: "アイテムのブランド名。"
  },
  {
    name: "itemCategory",
    ui_name: "Item category",
    UI名: "アイテムのカテゴリ",
    説明: "アイテムを分類する階層カテゴリ。たとえば、「アパレル/メンズ/サマー/シャツ/T シャツ」の場合、アパレルはアイテムのカテゴリです。"
  },
  {
    name: "itemCategory2",
    ui_name: "Item category 2",
    UI名: "アイテムのカテゴリ 2",
    説明: "アイテムを分類する階層カテゴリ。たとえば、「アパレル/メンズ/サマー/シャツ/T シャツ」の場合、メンズはアイテムのカテゴリ 2 になります。"
  },
  {
    name: "itemCategory3",
    ui_name: "Item category 3",
    UI名: "アイテムのカテゴリ 3",
    説明: "アイテムを分類する階層カテゴリ。たとえば、「アパレル/メンズ/サマー/シャツ/T シャツ」の場合、サマーはアイテムのカテゴリ 3 になります。"
  },
  {
    name: "itemCategory4",
    ui_name: "Item category 4",
    UI名: "アイテムのカテゴリ 4",
    説明: "アイテムを分類する階層カテゴリ。たとえば、「アパレル/メンズ/サマー/シャツ/T シャツ」の場合、シャツはアイテムのカテゴリ 4 になります。"
  },
  {
    name: "itemCategory5",
    ui_name: "Item category 5",
    UI名: "アイテムのカテゴリ 5",
    説明: "アイテムを分類する階層カテゴリ。たとえば、「アパレル/メンズ/サマー/シャツ/T シャツ」の場合、T シャツはアイテムのカテゴリ 5 になります。"
  },
  {
    name: "itemId",
    ui_name: "Item ID",
    UI名: "アイテム ID",
    説明: "商品アイテムの ID。"
  },
  {
    name: "itemListId",
    ui_name: "Item list ID",
    UI名: "アイテムリスト ID",
    説明: "アイテムリストの ID。"
  },
  {
    name: "itemListName",
    ui_name: "Item list name",
    UI名: "アイテムリスト名",
    説明: "アイテムリストの名前。"
  },
  {
    name: "itemListPosition",
    ui_name: "Item list position",
    UI名: "アイテムリスト位置",
    説明: "リスト内のアイテム（販売している商品など）の位置。このディメンションは、items 配列の「index」パラメータによってタグ付けされます。"
  },
  {
    name: "itemLocationID",
    ui_name: "Item location ID",
    UI名: "アイテムの地域 ID",
    説明: "商品アイテムに関連付けられた場所（実店舗の所在地など）。関連するアイテムに対応する Google プレイス ID を使用することをおすすめします。カスタムの地域 ID も使用できます。このフィールドは、items 配列の location_id パラメータによってタグ付けされます。"
  },
  {
    name: "itemName",
    ui_name: "Item name",
    UI名: "アイテム名",
    説明: "商品アイテムの名前。"
  },
  {
    name: "itemPromotionCreativeName",
    ui_name: "Item promotion creative name",
    UI名: "アイテム プロモーションのクリエイティブ名",
    説明: "アイテムのプロモーション（クリエイティブ）の名前です。"
  },
  {
    name: "itemPromotionCreativeSlot",
    ui_name: "Item promotion creative slot",
    UI名: "アイテムのプロモーション（クリエイティブのスロット）",
    説明: "アイテムに関連付けられたプロモーション用のクリエイティブ スロットの名前。このディメンションは、イベント レベルまたは商品アイテムレベルで「creative_slot」パラメータを使用してタグ付けで指定できます。パラメータがイベント単位と商品アイテム単位の両方で指定されている場合、アイテム単位のパラメータが使用されます。"
  },
  {
    name: "itemPromotionId",
    ui_name: "Item promotion ID",
    UI名: "アイテム プロモーション ID",
    説明: "アイテムのプロモーションの ID。"
  },
  {
    name: "itemPromotionName",
    ui_name: "Item promotion name",
    UI名: "アイテム プロモーション名",
    説明: "アイテムのプロモーションの名前。"
  },
  {
    name: "itemVariant",
    ui_name: "Item variant",
    UI名: "アイテムのバリエーション",
    説明: "商品の特定のバリエーション。例:サイズには XS、S、M、L を、色には赤、青、緑、黒を指定します。「item_variant」パラメータによってデータが入力されます。"
  },
  {
    name: "landingPagePlusQueryString",
    ui_name: "Landing page + query string",
    UI名: "ランディング ページ + クエリ文字列",
    説明: "セッションの最初のページビューに関連付けられたページ階層とクエリ文字列。"
  },
  {
    name: "language",
    ui_name: "Language",
    UI名: "母国語",
    説明: "ユーザーのブラウザまたはデバイスの言語設定（例: 英語）"
  },
  {
    name: "languageCode",
    ui_name: "Language code",
    UI名: "言語コード",
    説明: "ユーザーのブラウザまたはデバイスの言語設定（ISO 639）。例: 「en-us」"
  },
  {
    name: "level",
    ui_name: "Level",
    UI名: "階層",
    説明: "ゲーム内のプレーヤーのレベル。イベント パラメータ「level」によってデータが入力されます。"
  },
  {
    name: "linkClasses",
    ui_name: "Link classes",
    UI名: "リンクのクラス",
    説明: "アウトバウンド リンクの HTML クラス属性。たとえば、ユーザーが「」というリンクをクリックすると、このディメンションでは「center」が返されます。拡張計測機能が有効になっている場合は自動的に入力されます。イベント パラメータ「link_classes」によってデータが入力されます。"
  },
  {
    name: "linkDomain",
    ui_name: "Link domain",
    UI名: "リンクドメイン",
    説明: "アウトバウンド リンクのリンク先ドメイン。たとえば、ユーザーが「」というリンクをクリックすると、このディメンションでは「youtube.com」が返されます。拡張計測機能が有効になっている場合は自動的に入力されます。イベント パラメータ「link_domain」によってデータが入力されます。"
  },
  {
    name: "linkId",
    ui_name: "Link ID",
    UI名: "リンク ID",
    説明: "アウトバウンド リンクまたはファイル ダウンロード用の HTML ID 属性。たとえば、ユーザーが「」というリンクをクリックすると、このディメンションでは「socialLinks」が返されます。拡張計測機能が有効になっている場合は自動的に入力されます。イベント パラメータ「link_id」によってデータが入力されます。"
  },
  {
    name: "linkText",
    ui_name: "Link text",
    UI名: "リンクテキスト",
    説明: "ファイル ダウンロード用のリンクテキスト。拡張計測機能が有効になっている場合は自動的に入力されます。イベント パラメータ「link_text」によってデータが入力されます。"
  },
  {
    name: "linkUrl",
    ui_name: "Link URL",
    UI名: "リンク URL",
    説明: "アウトバウンド リンクまたはファイル ダウンロード用の完全な URL。たとえば、ユーザーが「」というリンクをクリックすると、このディメンションでは「https://www.youtube.com/results?search_query=analytics」が返されます。拡張計測機能が有効になっている場合は自動的に入力されます。イベント パラメータ「link_url」によってデータが入力されます。"
  },
  {
    name: "manualAdContent",
    ui_name: "Manual ad content",
    UI名: "手動広告コンテンツ",
    説明: "コンバージョン イベントに関連付けられる広告コンテンツ。utm_content パラメータによってデータが入力されます。"
  },
  {
    name: "manualTerm",
    ui_name: "Manual term",
    UI名: "手動キーワード",
    説明: "コンバージョン イベントに関連付けられるキーワード。utm_term パラメータによってデータが入力されます。"
  },
  {
    name: "medium",
    ui_name: "Medium",
    UI名: "普通",
    説明: "コンバージョン イベントへの貢献度が割り当てられたメディア。"
  },
  {
    name: "method",
    ui_name: "Method",
    UI名: "メソッド",
    説明: "イベントがトリガーされたメソッド。イベント パラメータ「method」によってデータが入力されます。"
  },
  {
    name: "minute",
    ui_name: "Minute",
    UI名: "分",
    説明: "イベントが記録された時刻（2 桁）。このディメンションの範囲は 0 ～ 59 で、プロパティのタイムゾーンでレポートされます。"
  },
  {
    name: "mobileDeviceBranding",
    ui_name: "Device brand",
    UI名: "デバイスのブランド",
    説明: "メーカー名またはブランド名（Samsung、HTC、Verizon、T-Mobile など）です。)."
  },
  {
    name: "mobileDeviceMarketingName",
    ui_name: "Device",
    UI名: "デバイス",
    説明: "ブランドのデバイス名（例: Galaxy S10、P30 Pro）。"
  },
  {
    name: "mobileDeviceModel",
    ui_name: "Mobile model",
    UI名: "モバイルモデル",
    説明: "モバイル デバイスの機種名（iPhone X、SM-G950F など）。"
  },
  {
    name: "month",
    ui_name: "Month",
    UI名: "月",
    説明: "イベントの月（01～12 の 2 桁の整数）。"
  },
  {
    name: "newVsReturning",
    ui_name: "New / returning",
    UI名: "新規またはリピーター",
    説明: "新規ユーザーのセッション数が 0 で、リピーターのセッション数が 1 回以上である。このディメンションは、「新規」または「返品」の 2 つの値を返します。"
  },
  {
    name: "nthDay",
    ui_name: "Nth day",
    UI名: "N 日目",
    説明: "期間が開始してからの経過日数。"
  },
  {
    name: "nthHour",
    ui_name: "Nth hour",
    UI名: "N 時間目",
    説明: "期間が開始してからの時間数。開始時間は 0000 です。"
  },
  {
    name: "nthMinute",
    ui_name: "Nth minute",
    UI名: "N 分",
    説明: "期間が開始してからの経過時間（分単位）。開始分は 0000 です。"
  },
  {
    name: "nthMonth",
    ui_name: "Nth month",
    UI名: "N か月目",
    説明: "期間が開始してからの経過月数。最初の月は 0000 です。"
  },
  {
    name: "nthWeek",
    ui_name: "Nth week",
    UI名: "N 週目",
    説明: "期間が開始してからの経過週数を表す数値です。"
  },
  {
    name: "nthYear",
    ui_name: "Nth year",
    UI名: "N 年目",
    説明: "期間が開始してからの経過年数。最初の年は 0000 です。"
  },
  {
    name: "operatingSystem",
    ui_name: "Operating system",
    UI名: "オペレーティング システム",
    説明: "アプリまたはウェブサイトのユーザーが使用したオペレーティング システムです。デスクトップとモバイルのオペレーティング システム（Windows や Android など）を含む"
  },
  {
    name: "operatingSystemVersion",
    ui_name: "OS version",
    UI名: "OS バージョン",
    説明: "ウェブサイトまたはアプリのユーザーが使用したオペレーティング システムのバージョン（例: Android 10 のバージョンは 10、iOS 13.5.1 のバージョンは 13.5.1）。"
  },
  {
    name: "operatingSystemWithVersion",
    ui_name: "Operating system with version",
    UI名: "オペレーティング システム（バージョンあり）",
    説明: "オペレーティング システムとバージョン。Android 10、Windows 7 など"
  },
  {
    name: "orderCoupon",
    ui_name: "Order coupon",
    UI名: "オーダー クーポン",
    説明: "注文対象のクーポンコード。"
  },
  {
    name: "outbound",
    ui_name: "Outbound",
    UI名: "送信",
    説明: "リンク先がプロパティのドメインの一部でない場合は、「true」を返します。拡張計測機能が有効になっている場合は自動的に入力されます。イベント パラメータ「outbound」によってデータが入力されます。"
  },
  {
    name: "pageLocation",
    ui_name: "Page location",
    UI名: "ページの場所",
    説明: "アクセスしたウェブページのプロトコル、ホスト名、ページパス、クエリ文字列です。たとえば、https://www.example.com/store/contact-us?query_string=true の pageLocation 部分は https://www.example.com/store/contact-us?query_string=true です。イベント パラメータ「page_location」によってデータが入力されます。"
  },
  {
    name: "pagePath",
    ui_name: "Page path",
    UI名: "ページ階層",
    説明: "アクセスしたウェブページのホスト名とクエリ文字列の間にある URL の部分です。たとえば、https://www.example.com/store/contact-us?query_string=true の pagePath 部分は /store/contact-us です。"
  },
  {
    name: "pagePathPlusQueryString",
    ui_name: "Page path + query string",
    UI名: "ページ階層とクエリ文字列",
    説明: "アクセスしたウェブページのホスト名の後の URL の部分です。たとえば、https://www.example.com/store/contact-us?query_string=true の pagePathPlusQueryString 部分は /store/contact-us?query_string=true です。"
  },
  {
    name: "pageReferrer",
    ui_name: "Page referrer",
    UI名: "ページの参照 URL",
    説明: "ホスト名とパスを含む完全な参照 URL。この参照元 URL はユーザーの以前の URL で、このウェブサイトのドメインまたは他のドメインである可能性があります。イベント パラメータ「page_referrer」によってデータが入力されます。"
  },
  {
    name: "pageTitle",
    ui_name: "Page title",
    UI名: "ページタイトル",
    説明: "サイトで使用されているウェブページのタイトルです。"
  },
  {
    name: "percentScrolled",
    ui_name: "Percent scrolled",
    UI名: "スクロール済みの割合",
    説明: "ユーザーがページをスクロールした割合（90 など）。拡張計測機能が有効になっている場合は自動的に入力されます。イベント パラメータ「percent_scrolled」によってデータが入力されます。"
  },
  {
    name: "platform",
    ui_name: "Platform",
    UI名: "プラットフォーム",
    説明: "アプリやウェブサイトが実行されたプラットフォーム（ウェブ、iOS、Android など）。レポートでストリームのタイプを確認するには、platform と streamId の両方を使用します。"
  },
  {
    name: "platformDeviceCategory",
    ui_name: "Platform / device category",
    UI名: "プラットフォーム / デバイス カテゴリ",
    説明: "ウェブサイトまたはモバイルアプリが実行されたプラットフォームとデバイスの種類。（Android / モバイルなど）。"
  },
  {
    name: "region",
    ui_name: "Region",
    UI名: "リージョン",
    説明: "ユーザー アクションが発生した地域。IP アドレスから取得されます。"
  },
  {
    name: "screenResolution",
    ui_name: "Screen resolution",
    UI名: "画面の解像度",
    説明: "ユーザーのモニターの画面解像度。例: 1920x1080。"
  },
  {
    name: "searchTerm",
    ui_name: "Search term",
    UI名: "検索キーワード",
    説明: "ユーザーが検索する語句。たとえば、ユーザーが「/some-page.html?q=some-term」にアクセスすると、このディメンションは「some-term」を返します。拡張計測機能が有効になっている場合は自動的に入力されます。イベント パラメータ「search_term」によってデータが入力されます。"
  },
  {
    name: "sessionCampaignId",
    ui_name: "Session campaign ID",
    UI名: "セッションのキャンペーン ID",
    説明: "セッションのマーケティング キャンペーン ID。Google 広告キャンペーン、手動キャンペーン、その他のキャンペーンが含まれます。"
  },
  {
    name: "sessionCampaignName",
    ui_name: "Session campaign",
    UI名: "セッション キャンペーン",
    説明: "セッションのマーケティング キャンペーン名。Google 広告キャンペーン、手動キャンペーン、その他のキャンペーンが含まれます。"
  },
  {
    name: "sessionDefaultChannelGroup",
    ui_name: "Session default channel group",
    UI名: "セッションのデフォルト チャネル グループ",
    説明: "セッションのデフォルト チャネル グループは、主に参照元とメディアに基づいています。「ノーリファラー」、「オーガニック検索」、「有料ソーシャル」、「オーガニック ソーシャル」、「メール」、「アフィリエイト」、「リファーラル」、「有料検索」、「動画」、「ディスプレイ」などの列挙値。"
  },
  {
    name: "sessionGoogleAdsAccountName",
    ui_name: "Session Google Ads account name",
    UI名: "セッション - Google 広告アカウント名",
    説明: "セッションにつながった Google 広告のアカウント名。Google Ads API の customer.descriptive_name に対応しています。"
  },
  {
    name: "sessionGoogleAdsAdGroupId",
    ui_name: "Session Google Ads ad group ID",
    UI名: "セッション - Google 広告の広告グループ ID",
    説明: "セッションの Google 広告の広告グループ ID。"
  },
  {
    name: "sessionGoogleAdsAdGroupName",
    ui_name: "Session Google Ads ad group name",
    UI名: "セッション - Google 広告の広告グループ名",
    説明: "セッションの Google 広告の広告グループ名。"
  },
  {
    name: "sessionGoogleAdsAdNetworkType",
    ui_name: "Session Google Ads ad network type",
    UI名: "セッション - Google 広告の広告ネットワーク タイプ",
    説明: "セッションにつながった広告ネットワーク。「Google 検索」、「検索パートナー」、「Google ディスプレイ ネットワーク」、「YouTube 検索」、「YouTube 動画」、「クロスネットワーク」、「ソーシャル」、「（ユニバーサル キャンペーン）」を含む列挙型。"
  },
  {
    name: "sessionGoogleAdsCampaignId",
    ui_name: "Session Google Ads campaign ID",
    UI名: "セッションの Google 広告キャンペーン ID",
    説明: "このセッションにつながった Google 広告キャンペーンのキャンペーン ID。"
  },
  {
    name: "sessionGoogleAdsCampaignName",
    ui_name: "Session Google Ads campaign",
    UI名: "セッションの Google 広告キャンペーン",
    説明: "このセッションにつながった Google 広告キャンペーンのキャンペーン名。"
  },
  {
    name: "sessionGoogleAdsCampaignType",
    ui_name: "Session Google Ads campaign type",
    UI名: "セッションの Google 広告キャンペーン タイプ",
    説明: "このセッションにつながった Google 広告キャンペーンのキャンペーン タイプ。キャンペーン タイプによって、広告の表示先や、Google 広告で使用できる設定が決まります。キャンペーン タイプは、検索、ディスプレイ、ショッピング、動画、ファインド、アプリ、スマート、ホテル、ローカル、P-MAX を含む列挙型です。詳しくは、https://support.google.com/google-ads/answer/2567043 をご覧ください。"
  },
  {
    name: "sessionGoogleAdsCreativeId",
    ui_name: "Session Google Ads creative ID",
    UI名: "セッションの Google 広告クリエイティブ ID",
    説明: "ウェブサイトやアプリでセッションにつながった Google 広告クリエイティブ ID。個々の広告を識別できます。"
  },
  {
    name: "sessionGoogleAdsCustomerId",
    ui_name: "Session Google Ads customer ID",
    UI名: "セッション - Google 広告のお客様 ID",
    説明: "セッションにつながった Google 広告のお客様 ID。Google 広告のお客様 ID は、Google 広告アカウントを一意に識別します。"
  },
  {
    name: "sessionGoogleAdsKeyword",
    ui_name: "Session Google Ads keyword text",
    UI名: "セッション - Google 広告キーワードのテキスト",
    説明: "セッションにつながった一致したキーワード。キーワードとは、ターゲットとするユーザーに広告を表示するための、商品やサービスを表す語句です。キーワードについて詳しくは、https://support.google.com/google-ads/answer/6323 をご覧ください。"
  },
  {
    name: "sessionGoogleAdsQuery",
    ui_name: "Session Google Ads query",
    UI名: "セッション - Google 広告クエリ",
    説明: "セッションにつながった検索クエリ。"
  },
  {
    name: "sessionManualAdContent",
    ui_name: "Session manual ad content",
    UI名: "セッションの手動広告コンテンツ",
    説明: "セッションにつながった広告コンテンツ。utm_content パラメータによってデータが入力されます。"
  },
  {
    name: "sessionManualTerm",
    ui_name: "Session manual term",
    UI名: "セッションの手動キーワード",
    説明: "セッションにつながったキーワード。utm_term パラメータによってデータが入力されます。"
  },
  {
    name: "sessionMedium",
    ui_name: "Session medium",
    UI名: "セッション メディア",
    説明: "ウェブサイトまたはアプリでセッションを開始したメディア。"
  },
  {
    name: "sessionSa360AdGroupName",
    ui_name: "Session SA360 ad group name",
    UI名: "セッションの SA360 広告グループ名",
    説明: "このセッションにつながった検索広告 360 の広告グループ名。"
  },
  {
    name: "sessionSa360CampaignId",
    ui_name: "Session SA360 campaign ID",
    UI名: "セッションの SA360 キャンペーン ID",
    説明: "このセッションにつながった検索広告 360 のキャンペーン ID。"
  },
  {
    name: "sessionSa360CampaignName",
    ui_name: "Session SA360 campaign",
    UI名: "セッションの SA360 キャンペーン",
    説明: "このセッションにつながった検索広告 360 のキャンペーン名。"
  },
  {
    name: "sessionSa360CreativeFormat",
    ui_name: "Session SA360 creative format",
    UI名: "セッションの SA360 クリエイティブ フォーマット",
    説明: "このセッションにつながった検索広告 360 のクリエイティブのタイプ。（「レスポンシブ検索広告」、「拡張テキスト広告」など）。詳しくは、GA4 トラフィック ソースのディメンションをご覧ください。"
  },
  {
    name: "sessionSa360EngineAccountId",
    ui_name: "Session SA360 engine account ID",
    UI名: "セッションの SA360 エンジン アカウント ID",
    説明: "このセッションにつながった検索広告 360 のエンジン アカウントの ID。"
  },
  {
    name: "sessionSa360EngineAccountName",
    ui_name: "Session SA360 engine account name",
    UI名: "セッションの SA360 エンジン アカウント名",
    説明: "このセッションにつながった検索広告 360 のエンジン アカウントの名前。"
  },
  {
    name: "sessionSa360EngineAccountType",
    ui_name: "Session SA360 engine account type",
    UI名: "セッションの SA360 エンジン アカウントの種類",
    説明: "このセッションにつながった検索広告 360 のエンジン アカウントの種類。たとえば、「google ads」、「bing」、「baidu」などです。"
  },
  {
    name: "sessionSa360Keyword",
    ui_name: "Session SA360 keyword text",
    UI名: "セッションの SA360 キーワード テキスト",
    説明: "このセッションにつながった検索広告 360 の検索エンジン キーワード。"
  },
  {
    name: "sessionSa360Medium",
    ui_name: "Session SA360 medium",
    UI名: "セッションの SA360 のメディア",
    説明: "このセッションにつながった検索広告 360 の検索エンジン キーワード。例: 'cpc'."
  },
  {
    name: "sessionSa360Query",
    ui_name: "Session SA360 query",
    UI名: "セッションの SA360 のクエリ",
    説明: "このセッションにつながった検索広告 360 の検索クエリ。"
  },
  {
    name: "sessionSa360Source",
    ui_name: "Session SA360 source",
    UI名: "セッションの SA360 の参照元",
    説明: "このセッションにつながった検索広告 360 からのトラフィックの参照元。例: 「example.com」、「google」。"
  },
  {
    name: "sessionSource",
    ui_name: "Session source",
    UI名: "セッション参照元",
    説明: "ウェブサイトまたはアプリでセッションを開始したソース。"
  },
  {
    name: "sessionSourceMedium",
    ui_name: "Session source / medium",
    UI名: "セッション参照元またはメディア",
    説明: "ディメンション「sessionSource」と「sessionMedium」を組み合わせた値。"
  },
  {
    name: "sessionSourcePlatform",
    ui_name: "Session source platform",
    UI名: "セッションの参照元プラットフォーム",
    説明: "セッションのキャンペーンの参照元プラットフォーム。このフィールドは、UTM を使用するトラフィックでは「Manual」を返すものに依存しないでください。今後の機能リリースでは、このフィールドは「Manual」を返すことから「(not set)」を返すように更新されます。"
  },
  {
    name: "shippingTier",
    ui_name: "Shipping tier",
    UI名: "送料区分",
    説明: "購入されたアイテムの配送方法で選択されている送料区分（陸送、航空便、翌日便）。「shipping_tier」イベント パラメータによってデータが入力されます。"
  },
  {
    name: "signedInWithUserId",
    ui_name: "Signed in with user ID",
    UI名: "ユーザー ID でログイン済み",
    説明: "User-ID 機能によってログインしたユーザーの場合は文字列「yes」。User-ID について詳しくは、https://support.google.com/analytics/answer/9213390 をご覧ください。"
  },
  {
    name: "source",
    ui_name: "Source",
    UI名: "ソース",
    説明: "コンバージョン イベントへの貢献度が割り当てられた参照元。"
  },
  {
    name: "sourceMedium",
    ui_name: "Source / medium",
    UI名: "参照元 / メディア",
    説明: "ディメンション「source」と「medium」の合計値。"
  },
  {
    name: "sourcePlatform",
    ui_name: "Source platform",
    UI名: "参照元プラットフォーム",
    説明: "コンバージョン イベントのキャンペーンの参照元プラットフォーム。このフィールドは、UTM を使用するトラフィックでは「Manual」を返すものに依存しないでください。今後の機能リリースでは、このフィールドは「Manual」を返すことから「(not set)」を返すように更新されます。"
  },
  {
    name: "streamId",
    ui_name: "Stream ID",
    UI名: "ストリーム ID",
    説明: "アプリまたはウェブサイトを示す数値データ ストリーム ID。"
  },
  {
    name: "streamName",
    ui_name: "Stream name",
    UI名: "ストリーム名",
    説明: "アプリまたはウェブサイトのデータ ストリーム名。"
  },
  {
    name: "testDataFilterId",
    ui_name: "Test data filter ID",
    UI名: "テストデータのフィルタ ID",
    説明: "テスト状態のデータフィルタの数値識別子。データフィルタを使用すると、イベント パラメータ値に基づいて、レポートのイベントデータを追加または除外できます。詳しくは、https://support.google.com/analytics/answer/10108813 をご覧ください。"
  },
  {
    name: "testDataFilterName",
    ui_name: "Test data filter name",
    UI名: "テストデータのフィルタ名",
    説明: "テスト状態のデータフィルタの名前。データフィルタを使用すると、イベント パラメータ値に基づいて、レポートのイベントデータを追加または除外できます。詳しくは、https://support.google.com/analytics/answer/10108813 をご覧ください。"
  },
  {
    name: "transactionId",
    ui_name: "Transaction ID",
    UI名: "トランザクション ID",
    説明: "e コマース トランザクションの ID。"
  },
  {
    name: "unifiedPagePathScreen",
    ui_name: "Page path and screen class",
    UI名: "ページパスとスクリーン クラス",
    説明: "イベントが記録されたページ階層（ウェブ）またはスクリーン クラス（アプリ）。"
  },
  {
    name: "unifiedPageScreen",
    ui_name: "Page path + query string and screen class",
    UI名: "ページパス + クエリ文字列とスクリーン クラス",
    説明: "イベントが記録されたページ階層とクエリ文字列（ウェブ）またはスクリーン クラス（アプリ）。"
  },
  {
    name: "unifiedScreenClass",
    ui_name: "Page title and screen class",
    UI名: "ページタイトルとスクリーン クラス",
    説明: "イベントが記録されたページタイトル（ウェブ）またはスクリーン クラス（アプリ）。"
  },
  {
    name: "unifiedScreenName",
    ui_name: "Page title and screen name",
    UI名: "ページタイトルとスクリーン名",
    説明: "イベントが記録されたページタイトル（ウェブ）またはスクリーン名（アプリ）。"
  },
  {
    name: "userAgeBracket",
    ui_name: "Age",
    UI名: "Age",
    説明: "ユーザーの年齢層。"
  },
  {
    name: "userGender",
    ui_name: "Gender",
    UI名: "性別",
    説明: "ユーザーの性別。"
  },
  {
    name: "videoProvider",
    ui_name: "Video provider",
    UI名: "動画プロバイダ",
    説明: "動画のソース（「youtube」など）。拡張計測機能が有効になっている場合、埋め込み動画に自動的にデータが入力されます。イベント パラメータ「video_provider」によってデータが入力されます。"
  },
  {
    name: "videoTitle",
    ui_name: "Video title",
    UI名: "動画のタイトル",
    説明: "動画のタイトル。拡張計測機能が有効になっている場合、埋め込み動画に自動的にデータが入力されます。イベント パラメータ「video_title」によってデータが入力されます。"
  },
  {
    name: "videoUrl",
    ui_name: "Video URL",
    UI名: "動画の URL",
    説明: "動画の URL。拡張計測機能が有効になっている場合、埋め込み動画に自動的にデータが入力されます。イベント パラメータ「video_url」によってデータが入力されます。"
  },
  {
    name: "virtualCurrencyName",
    ui_name: "Virtual currency name",
    UI名: "仮想通貨の名前",
    説明: "ユーザーが操作する仮想通貨の名前（ゲームでジェムを消費したり購入したりするなど）。「virtual_currency_name」イベント パラメータによってデータが入力されます。"
  },
  {
    name: "visible",
    ui_name: "Visible",
    UI名: "visible",
    説明: "コンテンツが表示されている場合に「true」を返します。拡張計測機能が有効になっている場合、埋め込み動画に自動的にデータが入力されます。イベント パラメータ「visible」によってデータが入力されます。"
  },
  {
    name: "week",
    ui_name: "Week",
    UI名: "週",
    説明: "イベントの週（01 ～ 53 の 2 桁の数字）。1 週間は日曜日から始まります。1 月 1 日は常に第 01 週です。今年の最初の週と最後の週は、多くの場合 7 日間未満です。第 1 週と最終週以外の週は常に 7 日間です。1 月 1 日が日曜日の場合、その年の第 1 週と前年の最終週には 7 日間が与えられます。"
  },
  {
    name: "year",
    ui_name: "Year",
    UI名: "年",
    説明: "イベントの年（2020 などの 4 桁の数字）。"
  }
]

export default Dimension;
