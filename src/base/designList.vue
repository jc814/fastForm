<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="3" :offset="3">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="1">
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="16" :offset="3">
        <el-table
          :data="designList"
          style="width: 100%">
          <el-table-column
            prop="designName"
            label="名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="tableName"
            label="表明"
            width="180">
          </el-table-column>
          <el-table-column
            prop="description"
            label="说明"
            width="180">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="info"
                @click="designView(scope.$index, scope.row)">查看</el-button>
              <el-button
                size="mini"
                type="primary"
                >编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>

    </el-row>
  </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      designList: []
    }
  },
  methods: {
    getList () {
      this.$api.design.designList().then(res => {
        this.designList = res.data
      })
    }
  },
  mounted: function () {
    this.getList()
  }
}
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-aside {
    color: #333;
  }
</style>
