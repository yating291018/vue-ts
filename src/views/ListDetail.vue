<!--  -->
<template>
  <div>
   <detail-show :message="index" ref="detailshowRef"></detail-show>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import DetailShow from '@/components/DetailShow.vue'
@Component({
  components: {
    DetailShow
  }
})
export default class ListDetail extends Vue {
  // 初始化变量要赋值默认值
  private index: number = 0
  public mounted () {
    this.index = Number(this.$route.query.index)
    // 如果使用$refs调用子组件的方法和属性使用变量接受，然后在点
    let detailshowRefobj: any = this.$refs.detailshowRef
    console.log('detailshowRefobj', detailshowRefobj)
    detailshowRefobj.changeValue = 30
    console.log('index', this.index)
  }
}
</script>
<style lang='scss' scoped>
</style>