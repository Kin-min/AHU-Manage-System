<template>
<div>
  <el-carousel :interval="4000" type="card">
    <el-carousel-item v-for="item in 3" :key="item">
      <el-card :body-style="{ padding: '0px' }">
        <img src="../assets/logo.png" class="image">
      </el-card>
    </el-carousel-item>
  </el-carousel>
  <el-row class="singlerow">
    <el-col :span="6" v-for="(match, index) in matches" :key="match.match_ID" :offset="index > 0 ? 3 : 0">
      <el-card :body-style="{ padding: '0px' }">
        <router-link :to="'/match/' + match.match_ID">
          <img src="../assets/logo.png" class="image">
        </router-link>
        <div>
          <span class="name">{{ match.match_Name }}</span>
          <div class="bottom clearfix">
            <time class="time">{{ match.match_Satrt_Time }}</time>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
  <el-row class="singlerow">
    <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 3 : 0">
      <el-card :body-style="{ padding: '0px' }">
        <img src="../assets/logo.png" class="image">
        <div>
          <span class="name clearfix">好吃的汉堡</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      matches:''
      //  [
      //   {
      //     match_ID: 'ahu20170101',
      //     match_Name: '安大01竞赛',
      //     match_Satrt_Time: '2017-01-02',
      //     match_End_Time: '2017-01-03',
      //     sign_Number: 20,
      //     present_Picture: '../assets/logo.png'
      //   },
      //   {
      //     match_ID: 'ahu20170102',
      //     match_Name: '安大02竞赛',
      //     match_Satrt_Time: '2017-01-02',
      //     match_End_Time: '2017-01-03',
      //     sign_Number: 20,
      //     present_Picture: '../assets/logo.png'
      //   },
      //   {
      //     match_ID: 'ahu20170103',
      //     match_Name: '安大03竞赛',
      //     match_Satrt_Time: '2017-01-02',
      //     match_End_Time: '2017-01-03',
      //     sign_Number: 20,
      //     present_Picture: '../assets/logo.png'
      //   }
      // ]
      ,
      currentDate: '2017-5-15'
    }
  },
      created: function () {
     
      this.$http.get('/api/user/queryUser')
        .then(function(res){
          console.log(res.data)
          this.matches = res.data
	    },(res) =>{
        console.log('Something is wrong.')
      })
				
		},
  methods: {
  }
}
</script>
<style scoped>
  .singlerow {
    margin-top: 40px;
  }
  .name {
    font-size: 15px;
  }

  .time {
    font-size: 5px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .image {
    width: 100%
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
