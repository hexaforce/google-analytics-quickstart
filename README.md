# google-analytics-quickstart

```
pip3 install virtualenv
virtualenv .venv
source .venv/bin/activate
.venv/bin/pip install -r gunicorn-flask/requirements.txt
```

```
docker compose up -d --build
```

```
export GOOGLE_APPLICATION_CREDENTIALS="/Users/hexaforce/google-analytics-quickstart/Quickstart-30b4c8d1a1b0.json"
```

```
python gunicorn-flask/google/analytics_data/snippets/quickstart.py
python gunicorn-flask/google/HelloAnalytics.py
python gunicorn-flask/google/HelloAnalyticsV4.py
```



Google アナリティクス Management API は、以下の用途に使用できます。

ユーザーのアカウント、プロパティ、ビュー（旧プロファイル）の情報をすべて一覧表示する。
プロパティ、ビュー（旧プロファイル）、目標を管理する。
アカウントの階層構造に対するユーザー権限を管理する
Core Reporting API で使用するビュー（旧プロファイル）の ID を取得する。
有効な目標を特定し、その目標に設定されている名前にアクセスする。
アナリティクスのプロパティと Google 広告アカウントのリンクを管理する。
リマーケティング ユーザーリストを管理する。
https://developers.google.com/analytics/devguides/config/mgmt/v3?hl=ja

https://developers.google.com/analytics/devguides/config/mgmt/v3/mgmtReference?hl=ja






Google アナリティクス Reporting API では、次のことが可能です。

Google アナリティクスのデータを表示するカスタマイズされたマイレポートを作成する。
複雑なレポートタスクを自動化して時間を節約する。
Google アナリティクスのデータを他のビジネス アプリケーションと統合する。
https://developers.google.com/analytics/devguides/reporting/core/v4?hl=ja

https://developers.google.com/analytics/devguides/reporting/core/v4/migration?hl=ja



Google アナリティクス Admin API を使用すると、次のことができます。

新しいアカウントをプロビジョニングする。
アカウントの管理
データ共有設定を管理する
アカウントの概要を一覧表示します。
検索履歴のイベントを検索します。
プロパティを管理する。
ユーザーデータの収集を認める。
プロパティのデータの保持設定を管理する
プロパティの Google シグナルの設定を管理する（アルファ版）。
ストリームの管理。
Measurement Protocol Secret を管理します。
ウェブデータ ストリーム用の Google タグ スニペットを生成する（アルファ版）。
コンバージョン イベントを管理する
カスタム ディメンションを管理する
カスタム指標を管理する。
GA4 プロパティと Firebase プロジェクト間のリンクを管理する
GA4 プロパティと Google 広告アカウント間のリンクを管理する
GA4 プロパティとディスプレイ & amp;ビデオ 360 広告主（アルファ版）のリンクに関するプロポーザルを管理する
GA4 プロパティとディスプレイ & amp;ビデオ 360 広告主（アルファ版）とのリンクを管理する
アカウント階層と GA4 プロパティ（アルファ版）のユーザー権限を管理する。
ユーザー権限（グループまたは組織管理者ロールによって付与される有効な権限から取得した暗黙的な権限を含む）を監査します（アルファ版）。
データアクセス レポート（アルファ版）を生成する。
https://developers.google.com/analytics/devguides/config/admin/v1?hl=ja#properties_management

https://developers.google.com/analytics/devguides/config/admin/v1/rest?hl=ja

https://developers.google.com/analytics/devguides/config/admin/v1/rpc?hl=ja

