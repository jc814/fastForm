<template>
  <el-row :gutter="20">
    <el-col :span="12" :offset="6">
      <div class="grid-content bg-purple">
        <el-form ref="form" :model="design" label-width="80px">
          <el-form-item label="名称">
            <el-input v-model="design.designName"></el-input>
          </el-form-item>
          <el-form-item label="表名">
            <el-select v-model="design.tableName" placeholder="请选择一张表" @click.native="findTables">
              <el-option v-for="table in tables" :label="table" :value="table"  v-bind:key="table" @click.native="columnList(table)">
                {{table}}
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="主键字段">
            <el-select v-model="design.primaryKey" placeholder="请选择字段">
              <el-option v-for="field in fields" :label="field" :value="field" v-bind:key="field">
                {{field}}
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="排序字段">
            <el-select v-model="design.orderBy" placeholder="请选择字段">
              <el-option v-for="field in fields" :label="field" :value="field" v-bind:key="field">
                {{field}}
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="按钮">
            <el-checkbox-group v-model="design.buttonName">
              <el-checkbox label="add" name="buttons">增加</el-checkbox>
              <el-checkbox label="del" name="buttons">删除</el-checkbox>
              <el-checkbox label="update" name="buttons">修改</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="列数">
            <el-radio-group v-model="design.columnNum">
              <el-radio label="1"></el-radio>
              <el-radio label="2"></el-radio>
              <el-radio label="3"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="描述">
            <el-input type="textarea" v-model="design.description"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
            <el-button @click="goBack">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      design: {
        id: '',
        designName: '',
        isSingle: '',
        orderBy: '',
        primaryKey: '',
        buttonName: [],
        buttons: '',
        columnNum: '',
        unionSql: '',
        tableName: '',
        description: ''
      },
      tables: [],
      fields: []
    }
  },
  methods: {
    findTables () {
      this.$api.design.tableList().then(res => {
        console.log(res.data)
        this.tables = res.data
      })
    },
    columnList (tableName) {
      this.$api.field.columnList(tableName).then(res => {
        console.log(res.data)
        this.fields = res.data
      })
    },
    onSubmit () {
      this.design.isSingle = '1'
      let params = this.design
      params.buttons = ''
      for (let item of params.buttonName) {
        params.buttons += item + ','
      }
      this.$api.design.designAdd(params).then(res => {
        if (res.status === 200) {
          this.$message({
            message: '保存成功！',
            duration: 1000,
            showClose: true
          })
        } else {
          this.$message({
            message: '保存失败！',
            duration: 1000,
            showClose: true
          })
        }
      })
    },
    goBack () {
      this.$router.back(-1)
    }
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
