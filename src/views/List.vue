<!--  -->
<template>
  <div class="page-list">
    <ul>
      <li class="ulist" v-for="(item, index) in listData" :key="index" @click="changeList(index)">项目{{ item }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class List extends Vue {
  private listData: number[] = [1, 2, 3]
  changeList (index: number): void {
    this.$router.push({path: '/detail', query: {index} as any})
    // this.$set(this.listData, index, 8)
  }
}
</script>
<style lang='scss' scoped>
.ulist {
  padding: 8px 5px;
  border-bottom: .5px solid #ccc;
}
</style>
