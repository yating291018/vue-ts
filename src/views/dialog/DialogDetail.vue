<!--  -->
<template>
  <Modal v-model="modal" width="70%">
    <p slot="header" style="color:#f60;">
      <span>Delete confirmation</span>
    </p>
    <div style="text-align:center">
      <p>{{ message }}</p>
    </div>
    <swiper-vue></swiper-vue>
    <div slot="footer">
      <Button type="primary" @click="modal=false">Delete</Button>
    </div>
  </Modal>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import SwiperVue from '@/components/SwiperVue.vue'
@Component({
  components: {
    SwiperVue
  }
})
export default class DialogDetail extends Vue {
  private modal: boolean = false
  @Prop(String) message!: string
  mounted () {
    console.log('message', this.message)
  }
}
</script>
<style lang='scss' scoped>
</style>
