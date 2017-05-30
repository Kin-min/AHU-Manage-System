
<template>
  <div id="firstcomponent">
     <el-table
    :data="tableData3"
    height="250"
    border
    style="width: 100%">
    <el-table-column
      prop="match_ID"
      label="比赛ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="match_Name"
      label="比赛名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="match_Number"
      label="报名人数">
    </el-table-column>
  </el-table>
  
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'firstcomponent',
  data () {
    return {
      tableData3: ''
    }
  },
  created: function () {
     
      this.$http.get('/api/user/queryUser')
        .then(function(res){
          console.log(res.data)
          this.tableData3 = res.data
	    },(res) =>{
        console.log('Something is wrong.')
      })
				
		}
	
}
</script>

