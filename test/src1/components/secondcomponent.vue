<template>
  <div id="secondcomponent">
    <div style="margin: 20px;"></div>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="比赛ID">
        <el-input type="text" name="match_ID" v-model="match_ID"></el-input>
      </el-form-item>
      <el-form-item label="比赛名称">
        <el-input type="text" name="match_Name" v-model="match_Name"></el-input>
      </el-form-item>
      <el-form-item label="报名人数">
        <el-input type="text" name="match_Number" v-model="match_Number"></el-input>
      </el-form-item>
      <el-button type="primary" @click="addUser">提交</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'secondcomponent',

  data () {
    return {
      formLabelAlign: {
        match_ID: '',
        match_Name: '',
        match_Number: ''
      }
    }
  },
  methods: {
    addUser () {
      var id = this.match_ID
      var name = this.match_Name
      console.log(name)
      var number = this.match_Number
      this.$http.post('/api/user/addUser', {
        match_ID: id,
        match_Name: name,
        match_Number: number
      }, {}).then((response) => {
        console.log(response)
        alert('添加成功')
      })
    }
  }
}
</script>
