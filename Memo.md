# Memo

## 環境

- Webpack
- Aframe
- Vue.js

## メモ書き

- Webpackでbuildすると、は`<div id="app"></div>`の後ろに`<script src="...js">`が追加される
- `AFRAME.registerComponent()`は`<a-scene>`より先に登録することが推奨されている
- Vue ComponentにAframeのタグを書くようにすると上記を満たせない・・・・
- [hubs](https://github.com/mozilla/hubs)ではReactを使っているが、ComponentにAframeタグは書いていないっぽい？

## issue

- もしかするとVue ComponentとしてAframeのEntityは書けるが、`registerComponent()`はどうするか・・・
