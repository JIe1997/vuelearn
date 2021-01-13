Vue.component('swiper', {
  template: `<div class="swiper" v-if="colorList.length">
    <ul class="demo">
      <li @mouseenter="stopTimer" :style="{background: item}" v-for="(item, i) in colorList" v-show="currentIndex === i">{{i}}</li>
    </ul>
    <ol class="dots">
      <li v-for="(item, i) in colorList" @mouseenter="stopTimer" @mouseleave="startTimer" @click="currentIndex=i" :class="{active: currentIndex===i}"></li>
    </ol>
    <i class="arrow prev" @click="down" @mouseenter="stopTimer" @mouseleave="startTimer">&lt;</i>
    <i class="arrow next" @click="up" @mouseenter="stopTimer" @mouseleave="startTimer">&gt;</i>
  </div>`,
  props: {
    // 驼峰命名的话，在调用组件时就要用 - 链接
    cList: {
      type: Array,
      required: true,
      default: []
    }
  },
  mounted() {
    this.startTimer()
  },
  data() {
    return {
      colorList: this.cList,
      timer: null,
      currentIndex: 0,
    }
  },
  methods: {
    up() {
      if(++this.currentIndex === this.colorList.length){
        this.currentIndex = 0
      }
    },
    down() {
      if(--this.currentIndex === 0){
        this.currentIndex = this.colorList.length-1
      }
    },
    stopTimer() {
      clearInterval(this.timer)
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.up()
      }, 1000)
    }
  },
})