<template>
  <div>
    <el-row type="flex" justify="center" :gutter="30">
    <el-col :span="6">
    <el-form :model="form">
      <h3>基本信息</h3>
      <el-form-item>
      <el-input v-model="form.account" placeholder="请输入邮箱"auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
      <el-input v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
      <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item>
      <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
      </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="6">
    <h3>详细信息</h3>
      <el-form :model="form">
      <el-form-item>
      <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
      </el-form-item>
      <el-form-item>
      <el-radio v-model="form.gender" label="男">男</el-radio>
      <el-radio v-model="form.gender" label="女">女</el-radio>
      </el-form-item>
      <el-form-item>
      <el-input v-model="form.address" placeholder="请输入联系地址"></el-input>
      </el-form-item>
      <el-form-item>
      <el-input v-model="form.academy" placeholder="请输入所在学院" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
      <el-input v-model="form.faculty" placeholder="请输入所在系" auto-complete="off"></el-input>
      </el-form-item>
      </el-form>
    </el-col>
    </el-row>
    <el-row  type="flex" justify="center" :gutter="30">
      <el-col :span="12">
            <el-button class="test" type="primary">完 成</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      form: {
        account: '',
        gender: '男',
        password: '',
        phone:'12345689',
        address: '123',
      }
    }
  }
}
</script>
<style scoped>
.test{
  width: 100%;
}
</style>
