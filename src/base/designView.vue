<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="3" :offset="3">
        <el-input v-model="searchName" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="1">
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="21" :offset="3">
        <el-table
          :data="fieldList"
          style="width: 100%">
          <el-table-column
            prop="fieldName"
            label="名称"
            width="120">
          </el-table-column>
          <el-table-column
            prop="fieldRef"
            label="引用列"
            width="120">
          </el-table-column>
          <el-table-column
            prop="labelName"
            label="标签名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="searchShow"
            label="查询"
            width="60">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.searchShow"
                active-value="1"
                inactive-value="0"
                active-color="#13ce66"
                inactive-color="#ff4949"
                @change="changeShow(scope.row.id,'search',scope.row.searchShow)">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column
            prop="listShow"
            label="列表"
            width="60">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.listShow"
                active-value="1"
                inactive-value="0"
                active-color="#13ce66"
                inactive-color="#ff4949"
                @change="changeShow(scope.row.id,'list',scope.row.listShow)">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column
            prop="updateShow"
            label="新增"
            width="60">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.addShow"
                active-value="1"
                inactive-value="0"
                active-color="#13ce66"
                inactive-color="#ff4949"
                @change="changeShow(scope.row.id,'add',scope.row.addShow)">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="300">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="info"
                @click="fieldView(scope.$index, scope.row)">查看</el-button>
              <el-button
                size="mini"
                type="primary"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>

    </el-row>
  </div>
</template>
<script>
export default {
  name: 'designView',
  data () {
    return {
      fieldList: [],
      designId: '',
      searchName: ''
    }
  },
  methods: {
    getFieldList () {
      this.designId = this.$route.params.designId
      this.$api.field.fieldList(this.designId).then(res => {
        this.fieldList = res.data
      })
    },
    changeShow (id, type, state) {
      this.$api.field.changeShow(id, type, state).then(res => {
        if (res.data === true) {
        }
      })
    }
  },
  mounted () {
    this.getFieldList()
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
