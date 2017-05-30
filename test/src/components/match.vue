<template>
  <div id="root">
    <el-row :gutter="20">
      <el-col :span="14">
        <el-carousel trigger="click" height="300px">
          <el-carousel-item v-for="item in 3" :key="item">
            <img src="../assets/logo.png" class="image">
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="10">
        <el-card class="brief">
          <div class="text">
          比赛名称: {{ match.match_Name }} 
          </div>
          <div class="text">
          报名时间: {{ match.sign_Start_Time }} ~ {{ match.sign_End_Time }}
          </div>
          <div class="text">
          比赛时间: {{ match.match_Satrt_Time }} ~ {{ match.match_End_Time }}
          </div>
          <div class="text">
          报名人数: {{ match.sign_Number }}
          </div>
          <div class="text" v-if="user.Name.length!=0">
            <el-button type="primary">报名竞赛</el-button>
            <el-button type="success">成为志愿者</el-button>
          </div>
          <div class="text" v-else>
            <el-button type="primary" size="mini">注册并报名竞赛</el-button>
            <el-button type="success" size="mini">注册并成为志愿者</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="spcific">
      <el-card>
        {{ match.particular_Information}}
      </el-card>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'match',
  data () {
    return {
      user: {
        ID: 'this.$route.path.key',
        Name: 'AHU',
        Status: 'user'
      },
      match:''
    }
  },
  created(){
            alert($store.state.match_ID)
            var self = this;
            axios.post('/api/user/queryMatch',{match_ID:self.$route.path })
            .then(function (response) {
            self.match = response.data
            })
            .catch(e => {
              this.errors.push(e)
            })
  }
}
</script>

<style scoped>
  .brief {
    height: 300px;
  }

  .spcific {
    margin-top: 50px;
  }

  .text {
    font-size: 15px;
    margin-top: 25px;
  }

  .image {
    width: 100%
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
