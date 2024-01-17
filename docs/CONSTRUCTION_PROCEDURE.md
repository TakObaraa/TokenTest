## 開発環境構築手順

### 事前準備

1. リポジトリ複製
```sh
git clone git@github.com:wiseman-co-ltd/rl-app-manager.git
```

2. チェックアウト
```sh
git checkout develop
```


### 実装環境構築編

1. node.jsインストール

```sh
nvm install
```

2. 使用するnode.jsのバージョンを指定

```sh
nvm use
```

3. 依存パッケージをインストール

```sh
npm install
```

4. パッケージの脆弱性を修復

```sh
npm audit fix
```


### アプリケーションの起動方法

```sh
npm run start
```
