<p align="center">
<a href="https://kawagoe.traveler20.site" target="_blank">
<img src="./public/github-header.png" alt="kokopp"/>
</a>
</p>

# kokopp

## タスク

-   [x] おおまかなサイト設計
-   [x] Notion に地図の登録
-   [ ] ワイヤーフレームの作成
-   [x] デザインの作成
-   [x] コーディング実装
-   [x] ロゴの整理
-   [x] OGP 画像の設定
-   [ ] ブランドガイドラインをざっくりまとめる
    -   [x] ロゴ・アイコンの使い方
    -   [x] トップページの h2/h3/p
    -   [x] fv/子ページの fv(cover)
    -   [x] h2 見出し
    -   [x] h3 見出し
    -   [x] CTA ボタン
    -   [ ] header
    -   [ ] footer
    -   [ ] nav
-   [ ] Wraptas 組み込み
-   [ ] Wraptas 用 CSS 調整
-   [ ] Wraptas 開発環境の構築

## 構成

### ヘッダーメニュー

-   ホーム
<!-- -   当サイトについて -->
-   ギャラリー（DB）
-   地図
-   問い合わせ

### フッターメニュー

-   Links
    -   川越市公式ホームページ
    -   TV アニメ「月がきれい」
    -   小原好美のココロおきなく
    -   運営者サイト
-   About
    -   Twitter
    -   お問い合わせ
    -   当サイトについて
    -   プライバシーポリシー
    -   利用規約
-   Pages
    -   ギャラリー
    -   マップ
    -   お知らせ
    <!-- -   カレンダー -->

### ページ一覧

-   ホーム
-   ギャラリー（DB）
-   マップ
-   当サイトについて
-   利用規約
-   プライバシーポリシー
-   問い合わせ
-   ※ニュース
-   ※ブログ
-   ※カレンダー

## 各ページ

### ホーム

-   FV
-   ギャラリー
-   埋め込み地図
-   各種リンク

### ギャラリー

DB の表示切り替え

-   ギャラリー（ギャラリービュー）
-   一覧（テーブルビュー）
-   タグごと

### マップ

地図の埋め込みを全体に

---

# gulp-starter

gulp で FLOCSS × Dart Sass のコーディングをするためのスターターキット。

Git のリポジトリをコピー後、ターミナルで以下のコマンドを実行。

`git clone https://github.com/traveler20/gulp-starter.git`

`npm install`

`npx gulp`

http://localhost:3000/

大体こちらの URL にてローカルサーバーが立ち上がる。  
HTML の編集や Sass のコンパイルに対して自動でリロードするようにも設定済み。

詳細については[Zenn](https://zenn.dev/yurukei20/articles/f1f9b248fcf18b)で解説しています。

https://zenn.dev/yurukei20/articles/f1f9b248fcf18b

# 技術的な構成

構成としては、以下のようなディレクトリになっています。

```
docs
 │ index.html
 │
 └─asset
    ├─css
    ├─img
    └─js
src
 │ index.html
 │
 └─asset
    ├─img
    ├─js
    └─sass
       │ style.scss
       │
       ├─foundation
       │   _base.scss
       │   _reset.scss
       │   _system.scss
       │
       ├─layout
       │   _footer.scss
       │   _header.scss
       │
       └─object
          ├─component
          │   _loading.scss
          │   _section.scss
          │
          ├─project
          │   _contact.scss
          │
          └─utility
              _display.scss
```

`src`内でコーディングして`docs`にコンパイルしたファイルを出力させる構成にしています。

## gulp の機能

gulpfile に書いている機能としては大体以下の 5 つの機能。

-   Dart Sass のコンパイル
-   CSS の縮小化
-   JavaScript の縮小化
-   ローカルサーバーの立ち上げ
-   作業ファイルの監視（自動更新）

個人的には、Dart Sass でコンパイルしてコーディングするたびに画面が更新されればいいなと思い作成したので、gulpfile.js は結構汚いかもです。
もっとこうしたほうがいいよ！というのがあればディスカッション等で言ってもらえると幸いです。

## ファイル構成

各ファイルの役割についてざっくり紹介します。
多分、一般的な gulp ファイルと同じような役割かと思います。

### gulpfile.js

上述した gulp の機能を記載しているファイルです。

### docs

コンパイル後の HTML や CSS（納品・デプロイするフォルダ）

github pages の公開ディレクトリで docs を選択すると通常通り公開することも可能です。

### src

コーディング用の HTML や SCSS ファイル。

`git clone`をしたらほとんどここしか触りませんでした。

### src/asset/sass

Sass のコーディングファイル。CSS 設計は FLOCSS を採用しています。

Sass 自体は Dart Sass でコーディングして、sass フォルダ直下の style.scss ですべての Sass ファイルを`@use`しています。

Sass の構成一覧は以下のような感じです。

```
sass
│ style.scss
│
├─foundation
│   _base.scss
│   _reset.scss
│   _system.scss
│
├─layout
│   _footer.scss
│   _header.scss
│
└─object
    ├─component
    │   _loading.scss
    │   _section.scss
    │
    ├─project
    │   _contact.scss
    │
    └─utility
        _display.scss
```

# 使い方

## 前提条件

前提として node.js と npm がインストールされているものとします。

## 実際に使う流れ

前提条件が整っていれば、以下のような流れで進めます。

1. コーディングしたいファイルに `cd` コマンドで移動。
2. `git clone https://github.com/traveler20/gulp-starter.git` を実行
3. `npm install` を実行
4. `npx gulp` を実行
5. `src` 内でコーディング
6. `docs` 内のファイルを納品・デプロイ

まずは、git を clone します。

```
git clone https://github.com/traveler20/gulp-starter.git
```

ファイルが生成されるので、`npm install` で `node_module` など必要なファイルをインストールしましょう。

```
npm install
```

そのまま、 `npx gulp` を実行すれば、Dart Sass がコンパイルされ「コンパイルが成功されました」と表記されて、`http://localhost:3000/`が自動的にローカルサーバーが立ち上がるかと思います。

```
npx gulp
```

そのままコーディングしたら随時反映されるようになるので、`src` でコーディングしていきましょう。

コーディングが終われば、`docs` ファイルに必要な HTML,CSS,JavaScript,画像ファイルが出来上がっているかと思うので、こちらを納品、もしくはデプロイしていけば OK です。

GitHub Pages の場合、デプロイする場所を `docs` を選択すればそのまま公開できます。

![docsを選択](https://storage.googleapis.com/zenn-user-upload/4f5de145a8c5-20211211.png)
