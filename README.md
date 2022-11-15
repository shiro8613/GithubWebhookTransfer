# GithubWebhookTransfer
GithubからDiscordへのwebhookにプライベートリポジトリが表示されなくなります。（ソース書き換えでいろいろできます。）

このソースではAPIからくる情報のうち、privartの値がtrueかfalseかを識別してDiscordに通知するかを決めています。ですが、条件式や値を変更することで細かい通知制御が可能です。

使い方は簡単！ソース内の`URL`のところにDiscordWebhookのアドレスを入れ、`PORT`には好きなポート番号を入れます。
あとは起動してデプロイしたサーバーのアドレスとポートの後ろに`/payload`を付けたアドレス（例: `https://server-address:8080/payload`）をGithubのWebhookアドレスのところに入力して完成です。
