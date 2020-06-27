import store from "../store/store/js"

AFRAME.registerComponent('hand', {
  dependencies: ["raycaster"],
  init() {
    this.intersectedElement = null
    this.startButtonIntersected = false

    this.el.addEventListener('gripdown', (e) => {

    })
    this.el.addEventListener('raycaster-intersection', (e) => {
      // raycasterで交差したオブジェクトがStartButtonであれば startButtonIntersected = true
      // この状態でgripdownイベントが発生したら、playermovable = true にしてゲームを開始する
      // 現状はStartButtonに対してのみraycasterを定義しているので特に条件は不要
      this.startButtonIntersected = true
    })
    this.el.addEventListener('raycaster-intersection-cleared', (e) => {
      this.startButtonIntersected = false
    })
    this.el.addEventListener('gripdown', (e) => {
      // StartButtonに向いていた場合は行動可能にする
      if(this.startButtonIntersected){
        store.dispatch("updatePlayerMovable", true)
      }
    })
  },
})
