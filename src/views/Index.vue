<!--  -->
<template>
  <div class="page-index">
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline :label-width="80">
      <FormItem prop="q1" label="姓名">
        <Input type="text" v-model="formInline.q1" placeholder="姓名"/>
      </FormItem>
      <FormItem prop="w1" label="用户名称">
        <Input type="text" v-model="formInline.w1" placeholder="密码"/>
      </FormItem>
      <FormItem>
        <Button type="primary">Signin</Button>
      </FormItem>
    </Form>
    <Table border :columns="columns2" :data="data3">
      <template slot-scope="{ row }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="openDialog">View</Button>
        <Button type="error" size="small">Delete</Button>
      </template>
    </Table>
    <dialog-detail ref="dialogdetailRef" :message="message">
    </dialog-detail>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import DialogDetail from './dialog/DialogDetail.vue'
import { consoleMessage } from '../service/index'
@Component({
  components: {
    DialogDetail
  }
})
export default class Index extends Vue {
  public formInline = {
    q1: '',
    w1: ''
  }
  public ruleInline = {
    q1: [
      { required: true, message: 'Please fill in the user name', trigger: 'blur' }
    ],
    w1: [
      { required: true, message: 'Please fill in the password.', trigger: 'blur' },
      { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
    ]
  }
  public columns2 = [
    {
      title: 'Name',
      key: 'name'
    },
    {
      title: 'Age',
      key: 'age'
    },
    {
      title: 'Province',
      key: 'province'
    },
    {
      title: 'City',
      key: 'city'
    },
    {
      title: 'Address',
      key: 'address'
    },
    {
      title: 'Postcode',
      key: 'zip'
    },
    {
      title: 'Action',
      key: 'action',
      slot: 'action'
    }
  ]
  public data3 = [
    {
      name: 'John Brown',
      age: 18,
      address: 'New York No. 1 Lake Park',
      province: 'America',
      city: 'New York',
      zip: 100000
    },
    {
      name: 'Jim Green',
      age: 24,
      address: 'Washington, D.C. No. 1 Lake Park',
      province: 'America',
      city: 'Washington, D.C.',
      zip: 100000
    },
    {
      name: 'Joe Black',
      age: 30,
      address: 'Sydney No. 1 Lake Park',
      province: 'Australian',
      city: 'Sydney',
      zip: 100000
    },
    {
      name: 'Jon Snow',
      age: 26,
      address: 'Ottawa No. 2 Lake Park',
      province: 'Canada',
      city: 'Ottawa',
      zip: 100000
    }
  ]
  public message: string = ''
  mounted () {
    consoleMessage()
    console.log('formInline', this.formInline)
  }
  public openDialog (): void {
    this.message = `1${Math.floor(Math.random() * 1000)}`
    let detialDialog: any = this.$refs.dialogdetailRef
    detialDialog.modal = true
  }
}
</script>
<style lang='scss' scoped>
.page-index {
  padding: 20px;
}
</style>
