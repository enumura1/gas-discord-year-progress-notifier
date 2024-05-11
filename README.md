# Discord 年間進捗通知ツール

このツールは、Google Apps Scriptを使用して、Discordの特定のチャンネルに毎月15日にその年の進捗率を通知するものです。

## 使用方法

1. Google Apps Scriptを開きます。
2. `main.gs`のスクリプトをコピーしGAS側にコピペします。
3. DiscordのWebhook URLを取得し、スクリプト内の `webhookUrl` 変数に代入します。
4. Google Apps Scriptのトリガー設定で、このスクリプトを毎月15日に実行するように設定します。

## スクリプトの内容

- `calculatePercentageOfYear()`: 今日の日付から1月1日までの経過日数を計算し、その年の進捗率を算出します。`sendNotification()` を使って Discord チャンネルに通知を送信します。
- `sendNotification(message)`: 指定されたメッセージを Discord の Webhook を使用して通知します。

## 注意事項

- DiscordのWebhook URLは機密情報です。公開リポジトリで管理する際は注意してください。
- このツールは、Google Apps Scriptを使用しています。Google アカウントが必要です。

## ライセンス

[MIT ライセンス](LICENSE)の下で利用可能です。詳細は [LICENSE](LICENSE) を参照してください。
