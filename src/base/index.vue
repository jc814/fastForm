<template>
  <el-row :gutter="20">
    <el-col :span="3">
      <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <span>设计</span>
        </template>
        <el-menu-item index="1-1">
          <span slot="title" @click="toList('design')">列表</span>
        </el-menu-item>
        <el-menu-item index="1-2">
          <span slot="title" @click="toAdd('design')">添加</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span>多表设计</span>
        </template>
        <el-menu-item index="2-1">
          <span slot="title" @click="toList('unionDesign')">列表</span>
        </el-menu-item>
        <el-menu-item index="2-2">
          <span slot="title" @click="toAdd('unionDesign')">添加</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <span>方案</span>
        </template>
        <el-menu-item index="3-1">
          <span slot="title" @click="toList('schema')">列表</span>
        </el-menu-item>
        <el-menu-item index="3-2">
          <span slot="title" @click="toAdd('schema')">添加</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
    </el-col>
    <el-col :span="14">
      <div class="grid-content bg-purple-dark">
        <el-form inline ref="form" :model="form" label-width="80px" class="demo-form-inline">
          <el-form-item label="名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="grid-content bg-purple-dark">
        <el-table
          :data="designList"
          stripe
          style="width: 100%">
          <el-table-column
            prop="designName"
            label="名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="description"
            label="描述"
            width="180">
          </el-table-column>
          <el-table-column
            prop="tableName"
            label="引用表">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="info"
                @click="designView(scope.$index, scope.row, 'view')">查看</el-button>
              <el-button
                size="mini"
                type="primary"
                @click="toEdit(scope.row, 'update')">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="designDel(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      designList: [],
      form: {
        name
      }
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    onSubmit () {
      console.log('提交')
    },
    toList (name) {
      switch (name) {
        case 'design':
          break
        case 'unionDesign':
          break
        case 'schema':
          break
      }
    },
    toAdd (name) {
      switch (name) {
        case 'design':
          this.$router.push({name: 'designAdd', params: {type: 'add'}})
          break
        case 'unionDesign':
          break
        case 'schema':
          break
      }
    },
    toEdit (row, type) {
      this.$router.push({name: 'designAdd', params: {designId: row.id, type: 'edit'}})
    },
    getList () {
      this.$api.design.designList().then(res => {
        this.designList = res.data
      })
    },
    designView (index, row) {
      this.$router.push({name: 'designView', params: {designId: row.id}})
    },
    designDel (index, row) {
      this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$api.design.designDel(row.id).then(res => {
          if (res.status === 200) {
            this.getList()
            this.$message({
              message: '删除成功！',
              duration: 1000,
              showClose: true
            })
          } else {
            this.$message({
              message: '删除失败！',
              duration: 1000,
              showClose: true
            })
          }
        })
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
