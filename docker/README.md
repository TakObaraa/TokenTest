# 概要

　当ディレクトリではMeLL+一体化（RL）の実環境で使用するインフラのコードを管理しています。

## ディレクトリ構成

```
.                            // リポジトリ（root）
├── etc,                     //
├── docker                   // インフラコードのディレクトリ（現在位置のディレクトリ）
│   ├── _                    //
│   │   ├── mount            // コンテナマウント用ディレクトリ（必須でマウントするファイルを配置）
│   │   ├── share            // コンテナマウント用ディレクトリ（ゲスト・ホスト間の共有）
│   │   └── volumes          // コンテナ側のリソース出力用ディレクトリ
│   ├── {environmentName}    // 環境名
│   │   └── {serviceName}    // コンテナサービス名
│   │       ├── config       // imageで使用する設定ファイル置き場
│   │       ├── Dockerfile   // imageの設計ファイル
│   │       └── Makefile     // imageのビルドタスクを記載したMakefile
│   └── README.md            // 当ドキュメント
├── docker-tools             // 開発で使用するdocker（ディレクトリ構成は./dockerと同じ）
├── Makefile                 //
└── docker-compose.yml       //
```

## 各ディレクトリについて

- `docker/_/mount`
  - コンテナ起動時や起動後に使用するリソースを置くディレクトリです。コンテナやアプリケーションに渡す環境変数ファイルを配置したりします。
- `docker/_/share`
  - ゲスト・ホスト間でファイル・ディレクトリをやり取りするための共有ディレクトリです。
- `docker/_/volumes`
  - コンテナ側のリソースを出力するためのディレクトリです。ミドルウェアのログ出力やDBのデータ保存先として利用します。
- `docker/{environmentName}/{serviceName}/config`
  - コンテナビルド時の設定ファイルなどを置くディレクトリです
- `docker/{environmentName}/{serviceName}/Dockerfile`
  - コンテナの設計ファイルです。各環境ごとに用意しています。
- `docker/{environmentName}/{serviceName}/Makefile`
  - コンテナビルドのタスクを記載したMakefileです。
