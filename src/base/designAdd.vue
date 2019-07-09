<template>
  <el-row :gutter="20">
    <el-col :span="12" :offset="6">
      <div class="grid-content bg-purple">
        <el-form ref="form" :model="design" label-width="80px">
          <el-form-item label="名称">
            <el-input v-model="design.designName"></el-input>
          </el-form-item>
          <el-form-item label="表名">
            <el-select v-model="design.tableName" placeholder="请选择一张表">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="主键字段">
            <el-select v-model="design.primaryKey" placeholder="请选择字段">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="排序字段">
            <el-select v-model="design.orderBy" placeholder="请选择字段">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="按钮">
            <el-checkbox-group v-model="design.buttons">
              <el-checkbox label="增加" name="buttons"></el-checkbox>
              <el-checkbox label="删除" name="buttons"></el-checkbox>
              <el-checkbox label="修改" name="buttons"></el-checkbox>
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
            <el-input type="textarea" v-model="design.describe"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
            <el-button>取消</el-button>
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
        buttons: [],
        columnNum: '',
        unionSql: '',
        tableName: '',
        description: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$api.design.tableList().then(res => {
        console.log(res)
      })
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
