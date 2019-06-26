<!--  -->
<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>I'm Slide 1</swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
@Component({
  components: {
    Swiper,
    SwiperSlide
  }
})
export default class SwiperVue extends Vue {
  public swiperOption = {
    // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
    notNextTick: true,
    // swiper configs 所有的配置同swiper官方api配置
    autoplay: 3000,
    prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next'
  }
}
</script>
<style lang='scss' scoped>
</style>