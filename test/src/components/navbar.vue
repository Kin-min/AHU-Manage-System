<template>
  <el-menu :default-active="1" mode="horizontal">
    <el-row class="row" type="flex" justify="space-between">
      <el-col :xs="4" :sm="4" :md="4" :lg="3" :push="1">
        <router-link :to="'/'">
        <el-menu-item>LOGO</el-menu-item>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="8" :md="6" :lg="5">
        <el-menu-item>
          <el-input
          placeholder="搜索竞赛"
          icon="search">
          </el-input>
        </el-menu-item>
      </el-col>
      <el-col :xs="4" :sm="3" :md="3" :lg="2" :pull="1">
        <el-submenu v-if="user.Name.length!=0">
        <template slot="title">{{ user.Name }}</template>
        <el-menu-item>
          <router-link :to="'/profile/'+user.ID" class="rid">
            个 人 资 料
          </router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="'/create'" class="rid">
            创 建 竞 赛
          </router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="'/manage'" class="rid">
            <span v-if="user.Status=='user'">查 询 成 绩</span>
            <span v-else-if="user.Status=='admin'">管 理 竞 赛</span>
            <span v-else-if="user.Status=='topAdmin'">审 核 竞 赛</span>
          </router-link>
        </el-menu-item>
        <el-menu-item>注 销 用 户</el-menu-item>
        </el-submenu>
        <el-menu-item v-else>
          <el-button type="primary" @click="dialogFormVisible = true">登 陆</el-button>
          <el-dialog title="登陆竞赛系统" size="tiny" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="邮箱" :label-width="formLabelWidth">
                <el-input v-model="form.account" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="密码" :label-width="formLabelWidth">
                <el-input v-model="form.password" auto-complete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">登 陆</el-button>
            </div>
          </el-dialog>
          <router-link :to="'/register'">
          <el-button :plain="true" type="info">注 册</el-button>
          </router-link>
        </el-menu-item>
      </el-col>
    </el-row>
  </el-menu>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      user: {
        ID: 'ahu010101',
        Name: 'AHU',
        Status: 'admin'
      },
      dialogFormVisible: false,
      form: {
        account: '',
        password: ''
      },
      formLabelWidth: '50px'
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.rid {
  text-decoration: none;
}
</style>
