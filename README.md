# typescriptの練習　nodeでgame

## 環境構築

任意のフォルダ作成して移動
```terminal
$ mkdir typescript_node_game
$ cd typescript_node_game
```

package.json生成
```terminal
$ npm init -y
```

typescriptをインストール
```terminal
$ npm i -D typescript
$ npm i -D typescript@4.6.4 // バージョン指定
```

node_module内にインストールしたtsc実行でバージョン確認
```terminal
$ npx tsc -v
```

```terminal
$ mkdir src
$ touch src/index.ts
```

index.tsに適当に処理書いて
package.jsonにscripts追加

tsconfig.json生成して追記する
```terminal
$ touch tsconfig.json
```

```terminal
$ npm run build
$ npm run start
```

console.logを
process.stdout.writeに変更→コンパイル？トランスパイルエラーするので下記をインストール

```terminal
$ npm i -D @types/node
```

## githubに登録

結局クローンしてファイル配置した、、、
```terminal
$ git clone https://github.com/KIHARA-Keito/typescript_node_game.git
```

以下だとうまくいかなかった
```terminal
$ git init
$ git remote add origin https://github.com/KIHARA-Keito/typescript_node_game.git
$ git add ファイル名
$ git commit -m "コメント"
$ git push origin main
```

### 書籍サンプルソースコード
https://github.com/awesome-typescript-book/code-snapshot

<!--
```terminal
$ 
```

## 

## 

## 

## 

-->