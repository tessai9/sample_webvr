# Memo

## 環境

- Webpack
- Aframe
- Vue.js

## メモ書き

- Webpackでbuildすると、は`<div id="app"></div>`の後ろに`<script src="...js">`が追加される
  - `AFRAME.registerComponent()`は`<a-scene>`より先に登録することが推奨されている
  - `html-webpack-plugin`で`inject: "head"`を指定すれば`<head>`に`<script>`を入れられる

- [hubs](https://github.com/mozilla/hubs)ではReactを使っているが、ComponentにAframeタグは書いていないっぽい？

- Vue ComponentとしてAframeのEntityは書けるが、`registerComponent()`はどうするか・・・
  - `HTMLWebpackPlugin({ inject: "head" })`で解決できる

- Vueインスタンスは`DOMContentLoaded Event`時に作成すれば`Vue.$mount()`を効かせられる
    ```javascript
    window.addEventListener("DOMContentLoaded", () => {
      new Vue({
        render: h => h(App),
      }).$mount("#app")
    })
    ```

- boxオブジェクトに１枚のimageを適用すると、各面ごとに貼り付けられる

- VueRouterを使ったワールド移動
  - `<router-link tag="a-link">`とすればa-linkタグを生成することが可能ではあるが、遷移先の指定は結局`href="..."`の記述が必要
  - もしかすると、`<router-view>`のみ使えるけども遷移するためのオブジェクト自体はa-linkタグを記載することになりそう
  - ただし、`<a-entity cursor></a-entity>`を使用すると、どこを向いていてもクリックイベントが発生してLabyrinthページに移動してしまう
  - VueRouterのデフォルトパスが「http://localhost:8080/#/」になっちゃうのは何とかならないだろうか・・・？
    - VueRouterの定義に`mode: "history"`を追加すると直せる
  - Device DetectionでPCブラウザ用とVRブラウザ用の表示分けがしたい

- なぜかOculus QuestのブラウザだとVRモードになれない
  - httpだとVRモードに入れない
  - `webpack-dev-server --host 0.0.0.0 --https`で起動すればhttpsで接続できる

- 壁との衝突判定
  - raycasterを使ってcamera(player)と壁との距離を取得すれば壁をすり抜けないようにできそう
  - できた（Labyrinthで実現）
    - 法線ベクトルを取得し、そのデータからどの面でraycasterが反応したのかを判断する
    - raycasterが反応していないうちは現在位置を記憶し続け、反応したタイミングでその時の`x` or `z`の座標を固定する
  - Player Entityにraycaster付きのHand Entityを追加してみたが、上記のイベントに引っ張られてしまうのでid or classを判定して衝突が起こらない実装が必要

- GLTFモデルの透過
  - PNGの透過は`material="transparent: true;"`で透過できるが、GLTFモデルはそれが効かない
  - opacity? あるいはGLTFの設定か何か？
