<template>
  <div>
    <el-row type="flex" justify="center" :gutter="100">
      <el-col :span="8">
        <h3>修改信息</h3>
        <el-form :model="form">
        <el-form-item>
        <el-input v-model="form.phone" placeholder=''></el-input>
        </el-form-item>
        <el-form-item>
        <el-input v-model="form.oldpassword" placeholder="请输入旧密码"></el-input>
        </el-form-item>
        <el-form-item>
        <el-input v-model="form.password" placeholder="请输入新密码"></el-input>
        </el-form-item>
        <el-form-item>
        <el-input v-model="form.address" placeholder='user.address'></el-input>
        </el-form-item>
        <el-form-item>
        <el-input v-model="form.academy" placeholder='user.academy' auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
        <el-input v-model="form.faculty" placeholder='user.faculty' auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
        <el-button type="primary" id="submit">保 存 并 提 交</el-button>
        </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="8" v-if="user.Status=='user'">
        <h3>创建竞赛资格</h3>
        <el-card>
          <p> Want To Create A Competition? <br>Here are some rules<br>Obey Or Die</p>
        </el-card>
        <el-card class="text">
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            malength=140
            placeholder="请输入申请理由(140字符长度内)"
            v-model="reason">
          </el-input>
        </el-card>
        <el-button type="success" class="text" id="submit"> 申 请 创 办 竞 赛 </el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      user: {
        ID: '',
        Status: 'user'
      },
      form: {
        phone: '15556936747',
        address: '安徽大学磬苑校区',
        academy: '计算机科学与技术学院',
        faculty: '计算机科学与技术系'
      },
      reason: ''
    }
  }
}
</script>
<style scoped>
.text {
  font-size: 15px;
  margin-top: 33px;
}
#submit {
  width: 100%;
}
</style>
