<!--  -->
<template>
  <div @click="changevalueFn">
    {{ message }}
    {{ changeValue}}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
@Component({
  filters: {
    valueFilter (value: any) {
      return 0
    }
  }
})
export default class DetailShow extends Vue {
  @Prop() private message!: number
  private changeValue: number = 0
  public changevalueFn () {
    let random: number = Math.floor(Math.random() * 100)
    this.changeValue = random
  }
  @Watch('changeValue')
  public changevalueWatch (nv: number, ov: number) {
    console.log('nv', nv, ov)
  }
}
</script>
<style lang='scss' scoped>
</style>