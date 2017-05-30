
<template>
  <div>
  
  <el-row type="flex" justify="space-between">
  <el-col :span="length">
    <h4>
    <span v-if="user.Status=='user'">竞赛成绩</span>
    <span v-if="user.Status=='admin'">竞赛管理</span>
    <span v-if="user.Status=='topAdmin'">待审核竞赛</span>
    </h4>
    <el-table
      :data="matches"
      style="width: 100%">
      <el-table-column type="expand">
        <template scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="报名开始时间">
              <span>{{ props.row.sign_Start_Time }}</span>
            </el-form-item>
            <el-form-item label="报名结束时间">
              <span>{{ props.row.sign_End_Time }}</span>
            </el-form-item>
            <el-form-item label="竞赛开始时间">
              <span>{{ props.row.match_Start_Time }}</span>
            </el-form-item>
            <el-form-item label="竞赛结束时间">
              <span>{{ props.row.match_End_Time }}</span>
            </el-form-item>
            <el-form-item label="竞赛报名人数">
              <span>{{ props.row.sign_Number }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="竞赛编号"
        prop="match_ID"
        v-if="user.Status!=='user'">
      </el-table-column>
      <el-table-column
        label="竞赛名称"
        prop="match_Name">
      </el-table-column>
      <el-table-column
        label="竞赛状态"
        prop="audit_Status">
      </el-table-column>
      <el-table-column
        label="竞赛成绩"
        prop="grade"
        v-if="user.Status=='user'">
      </el-table-column>
      <el-table-column
        prop="audit_Status"
        label="操作"
        v-if="user.Status=='admin'">
        <template scope="props">
          <el-button
            type="text"
            size="small"
            v-if="props.row.audit_Status=='已结束'"
          >
          提交成绩
          </el-button>
          <el-button
            type="text"
            size="small"
            v-if="props.row.audit_Status=='未开始'"
          >
            <router-link :to="'/edit_Match/'+props.row.match_ID" class="rid">
              编辑竞赛
            </router-link>
          </el-button>
          
          <el-button
            type="text"
            size="small"
          >
            <router-link :to="'/detail_Match/'+props.row.match_ID" class="rid">
              竞赛详情
            </router-link>
          </el-button>
          <el-button
           
            @click="delMatch(props.row.match_ID)"
  
            type="text"
            size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="audit_Status"
        label="审核"
        v-if="user.Status=='topAdmin'">
        <template scope="props">
          <el-button
            type="success"
            size="small"
          >
          通过
          </el-button>
          <el-button
            type="danger"
            size="small"
          >
          拒绝
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-col>
  <el-col :span="length-1" v-if="user.Status=='topAdmin'">
    <h4>待审核申请人</h4>
    <el-table
      :data="applicants"
      style="width: 100%">
      <el-table-column type="expand">
        <template scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="申请理由">
              <span>{{ props.row.reason }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="用户编号"
        prop="user_ID">
      </el-table-column>
      <el-table-column
        label="用户名字"
        prop="user_Name">
      </el-table-column>
      <el-table-column
        prop="audit_Status"
        label="审核">
        <template scope="props">
          <el-button
            type="success"
            size="small"
          >
          通过
          </el-button>
          <el-button
            type="danger"
            size="small"
          >
          拒绝
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-col>
  </el-row>
  </div>
</template>
<script>
import axios from 'axios';
function del(self){
       axios.get('/api/user/queryUser')
    .then(function (response) {
      self.matches = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
  //删除比赛函数
  export default {
    
    data: () => ({
     
       
        matches:[],
         user: {
          ID: 'ahu010101',
          Name: 'AHU',
          Status: 'admin'
        },
        applicants: [
          {
            user_ID: 'asaljfw12391',
            user_Name: 'zheng jie',
            reason: 'REASON'
          }
        ]
    }),
    created() {
     
     var self = this;
      axios.get('/api/user/queryUser')
    .then(function (response) {
      self.matches = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
				
		},
    computed: {
      length: function () {
        if (this.user.Status !== 'topAdmin') {
          return 24
        } else {
          return 12
        }
      }
    },
    methods: {
    delMatch (message) {
      {
        var r=confirm("确定删除？删除后将不可恢复！");
        if (r==true)
          {
              var self = this;
            axios.post('/api/user/delMatch',{match_ID: message})
            .then(function (response) {
            del(self)
            })
            .catch(e => {
              this.errors.push(e)
            })
            alert("删除成功!");
          }
        // else
        //   {
        //   alert("已经取消删除!");
        //   }
  }

    }
  }
  }
    
</script>
<style scoped>
  .rid {
    text-decoration: none;
  }
</style>
