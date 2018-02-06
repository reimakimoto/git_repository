# hatahagu

## Getting Started

1. リポジトリをクローンします。

※リポジトリをクローンすると、ローカルに「hatahagu」ディレクトリが作成されます。以下、hatahaguディレクトリの中で作業をするので、
`$ cd hatahagu`（hatahaguディレクトリの中に移動）してから実行すること。

2. `$ npm install`  
パッケージをインストールします。

3. `$ gulp`  
watchタスクが開始されます。sourcesディレクトリを監視して、変更があればコンパイルなどのタスクが実行され、ブラウザがリロードされます。
`dist/images` が変更された場合もブラウザリロードが実行されます。

4. ブラウザで `http://localhost:3000` にアクセスするとindexページが表示されます。  
※ 他にローカルホストを立ち上げている場合はURLが異なる場合があります。Browsersyncの　`Access URLs: local` を参照してください。

※ エラーが発生したり、ディレクトリを新規作成したりするとwatchタスクが停止することがあります。その場合は再度 `gulp` コマンドを実行してください。

## Directories

```
├─ dist  #ドキュメントルート
│   ├─ css
│   ├─ images
│   └─ js
│
└─ sources
    ├─ js #JSのソースディレクトリ。ファイルを複数に分けると1つのファイルに結合してコンパイルされる
    │
    └─ sass
        ├─ basis      #要素ごとのベーススタイル
        ├─ component  #コンポーネントのスタイル
        ├─ layout     #ヘッダー・フッター・コンテナなどのレイアウトスタイル
        ├─ mixins     #mixin
        ├─ page       #ページ固有のスタイル
        ├─ utility    #補助的に使用する単一スタイルのクラス
        ├─ variables  #変数
        └─ style.scss #読み込み元のファイル。ディレクトリを増やした時は変更する必要あり
```

※ CSSの設計（命名規則・ディレクトリ構成）は[FLOCSS](https://www.tam-tam.co.jp/tipsnote/html_css/post10205.html)を参考にアレンジしています。
