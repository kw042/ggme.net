---
layout: ../../layouts/WorkDetail.astro
title: "rinzechan"
description: "アイマスのライブ申し込み締め切りの通知を行うDiscord Bot"
image: "/images/works/rinzechan.png"
slug: "rinzechan"
date: "2024-11-03"
---

## 概要

「アソプレ先行の期限昨日までだ...」

そんな失敗を繰り返さないために作られたDiscord Botです。つまりはASOBI TICKETのウェブサイトからチケットの申し込み受付状況を定期的に取得し、申し込み期限の前日となった時にDiscord上で通知を行うシステムというわけです。

## 機能

- 毎日12時に自動でライブ情報をチェック
- 申し込み期限が翌日に迫ったライブの通知
- スラッシュコマンドによる現在申し込み可能なライブの一覧表示

## 詳細
### 構成のお気持ち概観
![雑な構成図](/images/works/rinzechan_fig.png)


### スクレイピング
Selenium と BeautifulSoup を使用して、ASOBI TICKET からライブ情報（タイトル、申し込み方式、受付開始日、受付終了日）を取得する。取得したデータは申し込み期間内かどうかの判定を行い、取得した情報とともにJSON形式で保存する。

### リマインド
保存された JSON データから、受付終了日が翌日に迫ったライブ情報を抽出し、discord.js を使用して指定したチャンネルに通知を送信する。

### 自動実行
node-cron を使用して毎日12時に自動実行を行う。Node.js から Python スクリプトを実行する必要があるため、child process モジュールを利用して処理を行っている。

### スラッシュコマンド
discord.js の SlashCommandBuilder を使用して、現在申し込み可能なライブの一覧を表示するコマンドを実装している。保存された JSON データから該当するライブ情報を取得し、整形して表示する。

## ソースコード
[GitHub](https://github.com/kw042/rinzechan)
