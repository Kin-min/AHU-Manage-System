<template>
<div>
  <el-row type="flex" justify="space-around" :gutter="40">
    <el-col :lg="6">
      <h4>上传竞赛图片</h4>
      <el-upload
        class="upload-demo"
        drag
        action="C:\Users\KIN MIN\Desktop\testvue\test\src\assets\"
        multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-col>
    <el-col :lg="6">
      <h4>竞赛相关信息</h4>
      <el-form :model="form">
        <el-form-item>
          <el-input v-model="form.match_Name" placeholder="请输入活动名称"></el-input>
        </el-form-item>
        <el-form-item>
            <el-date-picker
              v-model="form.sign_Start_Time"
              type="datetime"
              placeholder="报名开始时间"
              format="yyyy-MM-dd"
              >
            </el-date-picker>
        </el-form-item>
        <el-form-item>
            <el-date-picker
              v-model="form.sign_End_Time"
              type="datetime"
              placeholder="报名结束时间"
              format="yyyy-MM-dd"
              >
            </el-date-picker>
        </el-form-item>
                <el-form-item>
            <el-date-picker
              v-model="form.match_Start_Time"
              type="datetime"
              placeholder="竞赛开始时间"
              format="yyyy-MM-dd"
              >
            </el-date-picker>
        </el-form-item>
        <el-form-item>
            <el-date-picker
              v-model="form.match_End_Time"
              type="datetime"
              placeholder="竞赛结束时间"
              format="yyyy-MM-dd"
              >
            </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.particular_Information" placeholder="请输入具体信息"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="addMatch">创 建 竞 赛</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</div>
</template>
<script>
import axios from 'axios';
    var today = new Date();//获得当前日期
    var year = today.getFullYear();//获得年份
    var month = today.getMonth() + 1;//此方法获得的月份是从0---11，所以要加1才是当前月份
    var day = today.getDate();//获得当前日期
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var second = today.getSeconds();
export default {
  data () {
    return {
      // pickerOptions0: {
      //     disabledDate(time) {
      //       return time.getTime() < Date.now() - 8.64e7;
      //     }
      //   },

      form: {
        match_ID: 'AHU-'+year + month + day + hour + minutes + second,
        match_Name:'',
        sign_Start_Time:'',
        sign_End_Time: '',
        match_Start_Time: '',
        match_End_Time:'',
        particular_Information:''
      }
    }
  },
  methods:{
    addMatch(){
            var self = this
            console.log(toString(self.form.sign_Start_Time))
            var id = self.form.match_ID
            var name = self.form.match_Name
            var sign_Start = self.form.sign_Start_Time
            var sign_End = self.form.sign_End_Time
            var match_Start = self.form.match_Start_Time
            var match_End = self.form.match_End_Time
            var info = self.form.particular_Information
            axios.post('/api/user/addMatch',{
        match_ID: id,
        match_Name:name,
        sign_Start_Time:sign_Start,
        sign_End_Time:sign_End ,
        match_Start_Time: match_Start,
        match_End_Time:match_End,
        particular_Information:info
            })
            .then(function (response) {
              alert('添加成功！')
            })
            .catch(e => {
              this.errors.push(e)
            })
    }
  }
}
</script>
<style scoped>
    
</style>
