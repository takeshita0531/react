# README

React起動までの流れ

* git cloneでリポジトリをクローンする。

* docker-compose buildでdockerをbuildする。

* docker-compose run web rails db:createでデータベースを作成する。

* docker-compose run web rails webpacker:installでwebpackerのインストールを行う。

* docker-compose run web rails webpacker:install:reactでreactのインストールを行う。

* docker-compose upでサーバーを起動する。
