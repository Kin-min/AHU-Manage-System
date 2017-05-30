<template>
<div>
  <el-row type="flex" justify="space-around" :gutter="40">
    <el-col :lg="6">
      <h4>添加竞赛图片</h4>
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
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
              v-model="form.sign_Time"
              type="daterange"
              placeholder="选择报名时间">
            </el-date-picker>
        </el-form-item>
        <el-form-item>
            <el-date-picker
              v-model="form.match_Time"
              type="daterange"
              placeholder="选择竞赛时间">
            </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.particular_Information" placeholder="请输入具体信息"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success">保 存 修 改</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        match_Name: 'Match Name Here',
        sign_Time: ['2017-01-01', '2017-01-02'],
        match_Time: ['2017-01-03', '2017-01-04'],
        particular_Information: 'particular information here'
      }
    }
  }
}
</script>
<style scoped>
</style>
