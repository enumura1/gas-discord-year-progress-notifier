function calculatePercentageOfYear() {
  const today = new Date();
  const year = today.getFullYear();
  
  // 1月1日の日付を取得
  const startDate = new Date(year, 0, 1);

  // 今日までの経過日数を計算
  const daysPassed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

  // 今年の総日数を計算
  const endDate = new Date(year, 11, 31);
  const totalDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));

  // 進捗率を計算
  const percentageFinished = (daysPassed / totalDays) * 100;

  // 通知メッセージを作成
  let message = "こんにちは！\n";
  message += year + " 年は全体のうち " + percentageFinished.toFixed(2) + "% が終了しました。";

  // 通知を送信
  sendNotification(message);
}

// Discord側に通知
function sendNotification(message) {
  const webhookUrl = "DiscordのWebhookURL"

  const payload = {
    "content": message
  };

  const options = {
    "method": "POST",
    "contentType": "application/json",
    "payload": JSON.stringify(payload)
  };

  UrlFetchApp.fetch(webhookUrl, options);

  Logger.log(message);
}
