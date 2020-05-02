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

- もしかするとVue ComponentとしてAframeのEntityは書けるが、`registerComponent()`はどうするか・・・
  - `HTMLWebpackPlugin({ inject: "head" })`で解決できる

- Vueインスタンスは`DOMContentLoaded Event`時に作成すれば`Vue.$mount()`を効かせられる
    ```javascript
    window.addEventListener("DOMContentLoaded", () => {
      new Vue({
        render: h => h(App),
      }).$mount("#app")
    })
    ```
