const Metric = [
  {
    name: "active1DayUsers",
    ui_name: "1-day active users",
    UI名: "1 日のアクティブ ユーザー",
    説明: "サイトまたはアプリでの 1 日のアクティブ ユーザーの数です。1 日には、レポートの期間の最終日が含まれます。注: これはアクティブ ユーザーと同じです。"
  },
  {
    name: "active28DayUsers",
    ui_name: "28-day active users",
    UI名: "28 日間のアクティブ ユーザー数",
    説明: "28 日間におけるサイトまたはアプリでのアクティブ ユーザーの数です。28 日には、レポート期間の最後の日が含まれます。"
  },
  {
    name: "active7DayUsers",
    ui_name: "7-day active users",
    UI名: "7 日間のアクティブ ユーザー",
    説明: "過去 7 日間にサイトやアプリで発生した個別のアクティブ ユーザーの数です。7 日間には、レポートの最後の 1 日が含まれます。"
  },
  {
    name: "activeUsers",
    ui_name: "Active users",
    UI名: "アクティブ ユーザー",
    説明: "サイトまたはアプリにアクセスした個別のユーザーの数。"
  },
  {
    name: "adUnitExposure",
    ui_name: "Ad unit exposure",
    UI名: "広告ユニットの表示時間",
    説明: "広告ユニットがユーザーに表示された時間（ミリ秒単位）。"
  },
  {
    name: "addToCarts",
    ui_name: "Add to carts",
    UI名: "カートに追加",
    説明: "ユーザーがショッピング カートにアイテムを追加した回数。"
  },
  {
    name: "advertiserAdClicks",
    ui_name: "Ads clicks",
    UI名: "広告のクリック数",
    説明: "ユーザーが広告をクリックしてプロパティに到達した合計回数。リンクされた検索広告 360 の広告主など、リンクされた統合で発生したクリックも対象となります。データ インポートでアップロードしたクリックも含まれます。"
  },
  {
    name: "advertiserAdCost",
    ui_name: "Ads cost",
    UI名: "広告費用",
    説明: "広告に支払った合計金額。リンクされた Google 広告アカウントなど、リンクされた統合の費用が含まれます。データ インポートからアップロードした費用も含まれます。詳しくは、費用データのインポートをご覧ください。"
  },
  {
    name: "advertiserAdCostPerClick",
    ui_name: "Ads cost per click",
    UI名: "Google 広告のクリック単価",
    説明: "クリック単価は、広告費用を広告クリック数で割ったものです。多くの場合、クリック単価（CPC）は省略されます。"
  },
  {
    name: "advertiserAdCostPerConversion",
    ui_name: "Cost per conversion",
    UI名: "コンバージョン単価",
    説明: "コンバージョン単価は、広告費用をコンバージョン数で割った値です。"
  },
  {
    name: "advertiserAdImpressions",
    ui_name: "Ads impressions",
    UI名: "広告の表示回数",
    説明: "インプレッションの合計数。リンクされたディスプレイ & amp;ビデオ 360 の広告主など、リンクされた統合で発生したインプレッションも含まれます。データ インポートでアップロードしたインプレッションも含まれます。"
  },
  {
    name: "averagePurchaseRevenue",
    ui_name: "Average purchase revenue",
    UI名: "購入による平均収益",
    説明: "イベントのトランザクション グループの平均購入収益。"
  },
  {
    name: "averagePurchaseRevenuePerPayingUser",
    ui_name: "ARPPU",
    UI名: "ARPPU",
    説明: "ARPPU（有料ユーザーごとの平均収益）は、購入イベントを発生させたアクティブ ユーザー 1 人あたりの購入収益額です。サマリー指標は選択した期間が対象です。"
  },
  {
    name: "averagePurchaseRevenuePerUser",
    ui_name: "Average purchase revenue per user",
    UI名: "ユーザーあたりの平均購入収益",
    説明: "アクティブ ユーザーあたりの平均購入収益は、イベントをログに記録したアクティブ ユーザー 1 人あたりの合計購入収益です。サマリー指標は選択した期間が対象です。"
  },
  {
    name: "averageRevenuePerUser",
    ui_name: "ARPU",
    UI名: "ARPU",
    説明: "アクティブ ユーザーあたりの平均収益額（ARPU）です。サマリー指標は選択した期間が対象です。ARPU は総収益を使用して、AdMob の推定収益額を含みます。"
  },
  {
    name: "averageSessionDuration",
    ui_name: "Average session duration",
    UI名: "平均セッション継続時間",
    説明: "ユーザー セッションの平均継続時間（秒）。"
  },
  {
    name: "bounceRate",
    ui_name: "Bounce rate",
    UI名: "直帰率",
    説明: "エンゲージメントがなかったセッションの割合（エンゲージメントが少ないセッションの数）をセッション数で割った値です。この指標は小数として返されます。たとえば、0.2761 の場合、セッションの 27.61% は直帰でした。"
  },
  {
    name: "cartToViewRate",
    ui_name: "Cart-to-view rate",
    UI名: "表示後にカートに追加された商品の割合",
    説明: "カートに商品を追加したユーザー数を、同じ商品を閲覧したユーザー数で割った値。この指標は小数として返されます。たとえば、「0.1132」は、商品を閲覧したユーザーの 11.32% が同じ商品をカートに追加したことを意味します。"
  },
  {
    name: "checkouts",
    ui_name: "Checkouts",
    UI名: "決済回数",
    説明: "ユーザーが購入手続きを開始した回数。この指標は「begin_checkout」イベントの発生をカウントします。"
  },
  {
    name: "cohortActiveUsers",
    ui_name: "Cohort active users",
    UI名: "コホートのアクティブ ユーザー",
    説明: "特定の期間（n 日目、週、月に対応するコホート）にアクティブになっているコホート内のユーザーの数。たとえば、コホート NthWeek = 0001 の場合、この指標は第 1 週にアクティブである（コホート内の）ユーザーの数です。"
  },
  {
    name: "cohortTotalUsers",
    ui_name: "Cohort total users",
    UI名: "コホートの合計ユーザー数",
    説明: "コホート内のユーザーの合計数。この指標は、コホートごとにレポートのすべての行で同じ値です。コホートは、獲得日を共有することにより定義されるため、コホートの合計ユーザー数は、そのコホートで選択した期間の コホート ActiveUsers と同じになります。障害物の選択範囲より後のレポート行の場合、一般に europeActiveUsers は コホート TotalUsers よりも小さくなります。この差異は、それ以降にアクティブでなかったコホートのユーザー数を表します。コホート合計ユーザー数は、一般的に指標のコホート指標「コホートのアクティブ ユーザー数」/「コホート合計ユーザー数」で使用され、コホートのユーザー維持率を計算します。activeUsers と totalUsers の関係は、コホート ActiveUsers と コホート TotalUsers の関係と等しくありません。"
  },
  {
    name: "conversions",
    ui_name: "Conversions",
    UI名: "コンバージョン数",
    説明: "コンバージョン イベントの数。イベントは、収集時にコンバージョンとしてマークが付けられます。その後は、イベントのコンバージョン マークの変更が適用されます。Google アナリティクスでは任意のイベントをコンバージョンとしてマークすることができます。一部のイベント（first_open、purchase）は、デフォルトでコンバージョンとしてマークされています。詳しくは、https://support.google.com/analytics/answer/9267568 をご覧ください。"
  },
  {
    name: "crashAffectedUsers",
    ui_name: "Crash-affected users",
    UI名: "障害の影響を受けたユーザー数",
    説明: "レポートのこの行でクラッシュをログに記録したユーザーの数。たとえば、レポートが時系列の場合は、この日付にクラッシュが 1 回以上発生したユーザーの合計が報告されます。クラッシュとは、「app_exception」という名前のイベントです。"
  },
  {
    name: "crashFreeUsersRate",
    ui_name: "Crash-free users rate",
    UI名: "障害が発生しなかったユーザーの割合",
    説明: "（レポートのこの行にある）クラッシュ イベントが発生していないユーザー数を合計ユーザー数で割った値です。この指標は小数として返されます。たとえば、0.9243 は、92.43% のユーザーがクラッシュの影響を受けなかったことを意味します。"
  },
  {
    name: "dauPerMau",
    ui_name: "DAU / MAU",
    UI名: "DAU/MAU",
    説明: "30 日間のアクティブ ユーザーのうち、1 日のアクティブ ユーザーでもある割合。この指標は小数として返されます。たとえば、「0.113」は、30 日間のアクティブ ユーザーの 11.3% が 1 日のアクティブ ユーザーでもあることを意味します。"
  },
  {
    name: "dauPerWau",
    ui_name: "DAU / WAU",
    UI名: "DAU/WAU",
    説明: "7 日間のアクティブ ユーザーのうち、1 日のアクティブ ユーザーでもある割合。この指標は小数として返されます。たとえば、「0.082」は 7 日間のアクティブ ユーザーの 8.2% が 1 日のアクティブ ユーザーでもあることを意味します。"
  },
  {
    name: "ecommercePurchases",
    ui_name: "Ecommerce purchases",
    UI名: "e コマース購入",
    説明: "ユーザーが購入手続きを完了した回数。この指標は「購入」イベントをカウントします。この指標は「in_app_purchase」イベントとサブスクリプション イベントをカウントしません。"
  },
  {
    name: "engagedSessions",
    ui_name: "Engaged sessions",
    UI名: "エンゲージメントのあったセッション数",
    説明: "10 秒を超えて継続したセッション、コンバージョン イベントが発生したセッション、またはスクリーン ビューが 2 件以上発生したセッションの数。"
  },
  {
    name: "engagementRate",
    ui_name: "Engagement rate",
    UI名: "エンゲージメント率",
    説明: "エンゲージメントのあったセッションの割合（エンゲージメントのあったセッション数をセッション数で割った値）。この指標は小数として返されます。たとえば、0.7239 は、セッションの 72.39% がエンゲージメントのあったセッションであることを意味します。"
  },
  {
    name: "eventCount",
    ui_name: "Event count",
    UI名: "イベント数",
    説明: "イベントの数。"
  },
  {
    name: "eventCountPerUser",
    ui_name: "Event count per user",
    UI名: "ユーザーあたりのイベント数",
    説明: "ユーザーあたりの平均イベント数（イベント数をアクティブ ユーザー数で割った値）。"
  },
  {
    name: "eventValue",
    ui_name: "Event value",
    UI名: "イベントの値",
    説明: "「value」というイベント パラメータの合計。"
  },
  {
    name: "eventsPerSession",
    ui_name: "Events per session",
    UI名: "セッションあたりのイベント数",
    説明: "セッションあたりの平均イベント数（イベント数をセッション数で割った値）。"
  },
  {
    name: "firstTimePurchaserConversionRate",
    ui_name: "First-time purchaser conversion",
    UI名: "初回購入者のコンバージョン数",
    説明: "初回購入を行ったアクティブ ユーザーの割合。この指標は小数として返されます。たとえば、0.092 の場合、アクティブ ユーザーの 9.2% が初回購入者であることを意味します。"
  },
  {
    name: "firstTimePurchasers",
    ui_name: "First time purchasers",
    UI名: "初回購入者数",
    説明: "最初の購入イベントを完了したユーザーの数。"
  },
  {
    name: "firstTimePurchasersPerNewUser",
    ui_name: "First-time purchasers per new user",
    UI名: "新規ユーザーあたりの初回購入者数",
    説明: "新規ユーザーあたりの初回購入者の平均数。"
  },
  {
    name: "itemListClickEvents",
    ui_name: "Item-list click events",
    UI名: "アイテムリストのクリック イベント数",
    説明: "リストに表示されたアイテムをユーザーがクリックした回数。この指標は、select_item イベントの発生をカウントします。"
  },
  {
    name: "itemListClickThroughRate",
    ui_name: "Item list click through rate",
    UI名: "アイテムリストのクリック率",
    説明: "リストを選択したユーザー数を、同じリストを表示したユーザー数で割った値。この指標は小数として返されます。たとえば、「0.2145」は、リストを表示したユーザーの 21.45% が同じリストを選択したことを意味します。"
  },
  {
    name: "itemListViewEvents",
    ui_name: "Item-list view events",
    UI名: "アイテムリストのビューイベント数",
    説明: "アイテムリストが表示された回数。この指標は、「view_item_list」イベントの発生をカウントします。"
  },
  {
    name: "itemPromotionClickThroughRate",
    ui_name: "Item promotion click through rate",
    UI名: "アイテム プロモーションのクリック率",
    説明: "プロモーションを選択したユーザー数を、同じプロモーションを表示したユーザーの数で割った値。この指標は小数として返されます。たとえば、「0.1382」は、プロモーションを視聴したユーザーの 13.82% がプロモーションも選択したことを意味します。"
  },
  {
    name: "itemRevenue",
    ui_name: "Item revenue",
    UI名: "アイテムの収益",
    説明: "アイテムのみの合計収益。アイテムの収益は、価格と在庫数で決まります。商品の収益に税金と送料は含まれません。税金と送料の値は、商品アイテム単位ではなくイベント時に指定します。"
  },
  {
    name: "itemViewEvents",
    ui_name: "Item view events",
    UI名: "アイテムのビューイベント数",
    説明: "アイテムの詳細が表示された回数。この指標は、「view_item」イベントの発生をカウントします。"
  },
  {
    name: "itemsAddedToCart",
    ui_name: "Items added to cart",
    UI名: "カートに追加されたアイテム数",
    説明: "1 つのアイテムのカートに追加されたユニット数。この指標は、「add_to_cart」イベント内のアイテムの数量をカウントします。"
  },
  {
    name: "itemsCheckedOut",
    ui_name: "Items checked out",
    UI名: "決済されたアイテム数",
    説明: "1 つの商品アイテムに対してチェックアウトされたユニットの数。この指標は「begin_checkout」イベント内のアイテムの数量をカウントします。"
  },
  {
    name: "itemsClickedInList",
    ui_name: "Items clicked in list",
    UI名: "リストでクリックされたアイテム数",
    説明: "単一のアイテムについてリスト内でクリックされたユニットの数。この指標は、select_item イベント内のアイテムの数量をカウントします。"
  },
  {
    name: "itemsClickedInPromotion",
    ui_name: "Items clicked in promotion",
    UI名: "プロモーションでクリックされたアイテム数",
    説明: "1 つの商品アイテムのプロモーションでクリックされたユニット数です。この指標は、「select_promotion」イベント内のアイテムの数量をカウントします。"
  },
  {
    name: "itemsPurchased",
    ui_name: "Items purchased",
    UI名: "購入されたアイテム数",
    説明: "購入イベントに含まれる 1 つのアイテムのユニット数。この指標は、購入イベントの商品アイテムの数量をカウントします。"
  },
  {
    name: "itemsViewed",
    ui_name: "Items viewed",
    UI名: "表示されたアイテム数",
    説明: "1 つのアイテムで表示されたユニット数。この指標は、「view_item」イベント内のアイテムの数量をカウントします。"
  },
  {
    name: "itemsViewedInList",
    ui_name: "Items viewed in list",
    UI名: "リストで表示されたアイテム数",
    説明: "単一アイテムでリストに表示されたユニット数。この指標は、「view_item_list」イベント内のアイテムの数量をカウントします。"
  },
  {
    name: "itemsViewedInPromotion",
    ui_name: "Items viewed in promotion",
    UI名: "プロモーションで表示されたアイテム数",
    説明: "プロモーションの対象となる 1 つのアイテムのユニット数です。この指標は、「view_promotion」イベントに含まれるアイテムの数量をカウントします。"
  },
  {
    name: "newUsers",
    ui_name: "New users",
    UI名: "新規ユーザー",
    説明: "初めてサイトを利用した、またはアプリを起動したユーザーの数です（発生イベント: first_open または first_visit）。"
  },
  {
    name: "organicGoogleSearchAveragePosition",
    ui_name: "Organic google search average position",
    UI名: "Google のオーガニック検索の平均掲載順位",
    説明: "Search Console から報告されたクエリにおけるウェブサイトの URL の平均ランキング。たとえば、あるサイトの掲載順位が 3 位で、別の検索クエリで 7 位だった場合、平均掲載順位は 5（3+7/2）になります。この指標には、有効な Search Console リンクが必要です。"
  },
  {
    name: "organicGoogleSearchClickThroughRate",
    ui_name: "Organic google search click through rate",
    UI名: "Google のオーガニック検索のクリック率",
    説明: "Search Console で報告される Google オーガニック検索のクリック率。クリック率は、インプレッションあたりのクリック数です。この指標は小数として返されます。たとえば、「0.0588」は、インプレッションの約 5.88% がクリックにつながったことを意味します。この指標には、有効な Search Console リンクが必要です。"
  },
  {
    name: "organicGoogleSearchClicks",
    ui_name: "Organic google search clicks",
    UI名: "Google のオーガニック検索のクリック数",
    説明: "Search Console から報告された Google オーガニック検索のクリック数。この指標には、有効な Search Console リンクが必要です。"
  },
  {
    name: "organicGoogleSearchImpressions",
    ui_name: "Organic google search impressions",
    UI名: "Google のオーガニック検索の表示回数",
    説明: "Search Console から報告された Google オーガニック検索のインプレッション数。この指標には、有効な Search Console リンクが必要です。"
  },
  {
    name: "promotionClicks",
    ui_name: "Promotion clicks",
    UI名: "プロモーションのクリック数",
    説明: "アイテムのプロモーションがクリックされた回数。この指標は、select_promotion イベントの発生をカウントします。"
  },
  {
    name: "promotionViews",
    ui_name: "Promotion views",
    UI名: "プロモーションのビュー数",
    説明: "アイテムのプロモーションが表示された回数。この指標は、「view_promotion」イベントの発生数をカウントします。"
  },
  {
    name: "publisherAdClicks",
    ui_name: "Publisher ad clicks",
    UI名: "パブリッシャー広告クリック数",
    説明: "ad_click イベントの数。"
  },
  {
    name: "publisherAdImpressions",
    ui_name: "Publisher ad impressions",
    UI名: "パブリッシャー広告インプレッション数",
    説明: "ad_impression イベントの数。"
  },
  {
    name: "purchaseRevenue",
    ui_name: "Purchase revenue",
    UI名: "購入による収益",
    説明: "アプリまたはサイトでの商品購入によって発生した収益の合計。購入による収益は、「purchase」、「ecommerce_purchase」、「in_app_purchase」、「app_store_subscription_convert」、「app_store_subscription_renew」などのイベントの収益の合計です。購入による収益は、タグ設定の「value」パラメータで指定されます。"
  },
  {
    name: "purchaseToViewRate",
    ui_name: "Purchase-to-view rate",
    UI名: "表示後購入された商品の割合",
    説明: "商品を購入したユーザーの数を、同じ商品を閲覧したユーザー数で割った値。この指標は小数として返されます。たとえば、0.128 は、商品を閲覧したユーザーの 12.8% が同じ商品を購入したことを意味します。"
  },
  {
    name: "purchaserConversionRate",
    ui_name: "Purchaser conversion",
    UI名: "購入者のコンバージョン",
    説明: "1 つ以上の購入トランザクションを行ったアクティブ ユーザーの割合。この指標は小数として返されます。たとえば、「0.412」はユーザーの 41.2% が購入者だったことを意味します。"
  },
  {
    name: "returnOnAdSpend",
    ui_name: "Return on ad spend",
    UI名: "広告費用対効果",
    説明: "広告費用対効果（ROAS）は、総収益を広告主の広告費用で割ったものです。"
  },
  {
    name: "screenPageViews",
    ui_name: "Views",
    UI名: "View",
    説明: "ユーザーが閲覧したアプリの画面またはウェブページの数。同じページやスクリーンが繰り返し表示された場合も集計されます（screen_view イベントと page_view イベント）。"
  },
  {
    name: "screenPageViewsPerSession",
    ui_name: "Views per session",
    UI名: "セッションあたりのページビュー数",
    説明: "ユーザーが 1 回のセッションで閲覧したアプリの画面またはウェブページの数。同じページやスクリーンが繰り返し表示された場合も集計されます（計算方法: （screen_view イベント数 + page_view イベント数）÷ セッション数）。"
  },
  {
    name: "screenPageViewsPerUser",
    ui_name: "Views per user",
    UI名: "ユーザーあたりのビュー",
    説明: "ユーザーがアクティブ ユーザーごとに閲覧したアプリ画面またはウェブページの数。同じページやスクリーンが繰り返し表示された場合も集計されます(screen_view + page_view イベント) ÷ アクティブ ユーザー。"
  },
  {
    name: "scrolledUsers",
    ui_name: "Scrolled users",
    UI名: "スクロールしたユーザー数",
    説明: "ページの 90% 以上を下にスクロールしたユニーク ユーザーの数。"
  },
  {
    name: "sessionConversionRate",
    ui_name: "Session conversion rate",
    UI名: "セッションのコンバージョン率",
    説明: "コンバージョン イベントが発生したセッションの割合。"
  },
  {
    name: "sessions",
    ui_name: "Sessions",
    UI名: "次の単位あたりの",
    説明: "サイトまたはアプリで開始したセッションの数（発生イベント: session_start）。"
  },
  {
    name: "sessionsPerUser",
    ui_name: "Sessions per user",
    UI名: "ユーザーあたりのセッション数",
    説明: "ユーザーあたりの平均セッション数（セッション数をアクティブ ユーザー数で割った値）です。"
  },
  {
    name: "shippingAmount",
    ui_name: "Shipping amount",
    UI名: "送料",
    説明: "トランザクションに関連付けられた送料。「shipping」イベント パラメータによってデータが入力されます。"
  },
  {
    name: "taxAmount",
    ui_name: "Tax amount",
    UI名: "税額",
    説明: "トランザクションに関連付けられた税額。'tax' イベント パラメータによってデータが入力されます。"
  },
  {
    name: "totalAdRevenue",
    ui_name: "Total ad revenue",
    UI名: "広告収入合計",
    説明: "AdMob と第三者のソースからの広告の合計収益。"
  },
  {
    name: "totalPurchasers",
    ui_name: "Total purchasers",
    UI名: "合計購入者数",
    説明: "選択した期間に購入イベントを記録したユーザーの数です。"
  },
  {
    name: "totalRevenue",
    ui_name: "Total revenue",
    UI名: "総収益",
    説明: "購入による収益、定期購入による収益、広告からの合計収益（購入による収益、定期購入による収益、広告収益など）。"
  },
  {
    name: "totalUsers",
    ui_name: "Total users",
    UI名: "合計ユーザー数",
    説明: "少なくとも 1 つのイベントをログに記録した個別のユーザーの数。イベントがログに記録された時点でサイトまたはアプリが使用されているかどうかに関係なく表示されます。"
  },
  {
    name: "transactions",
    ui_name: "Transactions",
    UI名: "トランザクション",
    説明: "購入による収益が発生したトランザクション イベントの数。トランザクション イベントは、in_app_purchase、ecommerce_purchase、purchase、app_store_subscription_renew、app_store_subscription_convert、払い戻しです。"
  },
  {
    name: "transactionsPerPurchaser",
    ui_name: "Transactions per purchaser",
    UI名: "購入者あたりのトランザクション数",
    説明: "購入者あたりのトランザクションの平均数。"
  },
  {
    name: "userConversionRate",
    ui_name: "User conversion rate",
    UI名: "ユーザー コンバージョン率",
    説明: "コンバージョン イベントをトリガーしたユーザーの割合。"
  },
  {
    name: "userEngagementDuration",
    ui_name: "User engagement",
    UI名: "ユーザー エンゲージメント",
    説明: "サイトまたはアプリがユーザーのデバイスのフォアグラウンドで動作している時間の合計（秒）です。"
  },
  {
    name: "wauPerMau",
    ui_name: "WAU / MAU",
    UI名: "WAU/MAU",
    説明: "30 日間のアクティブ ユーザーのうち、7 日間のアクティブ ユーザーでもある割合。この指標は小数として返されます。たとえば、「0.234」は、30 日間のアクティブ ユーザーの 23.4% が 7 日間のアクティブ ユーザーでもあることを意味します。"
  }
]

export default Metric;
