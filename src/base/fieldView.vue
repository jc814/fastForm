<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6" :offset="1" >
        <div class="title">列表</div>
        <el-form ref="form" :model="listForm" label-width="80px">
          <el-form-item label="宽度">
            <el-input v-model="listForm.width"></el-input>
          </el-form-item>
          <el-form-item label="是否展示">
            <el-switch
              v-model="listForm.isShow"
              active-text="是"
              inactive-text="否">
            </el-switch>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col span="6" :offset="1" >
        <div class="title">修改</div>
        <el-form ref="form" :model="addForm" label-width="80px">
          <el-form-item label="宽度">
            <el-input v-model="addForm.width"></el-input>
          </el-form-item>
          <el-form-item label="是否展示">
            <el-switch
              v-model="addForm.isShow"
              active-text="是"
              inactive-text="否">
            </el-switch>
          </el-form-item>
          <el-form-item label="是否必填">
            <el-switch
              v-model="addForm.isReqired"
              active-text="是"
              inactive-text="否">
            </el-switch>
          </el-form-item>
          <el-form-item label="校验类型">
              <el-select v-model="addForm.checkType" placeholder="请选择">
                <el-option>1</el-option>
                <el-option>2</el-option>
              </el-select>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col span="6" :offset="1">
        <div class="title">查询</div>
        <el-form ref="form" :model="searchForm" label-width="80px">
          <el-form-item label="宽度">
            <el-input v-model="searchForm.width"></el-input>
          </el-form-item>
          <el-form-item label="是否展示">
            <el-switch
              v-model="searchForm.isShow"
              active-text="是"
              inactive-text="否">
            </el-switch>
          </el-form-item>
          <el-form-item label="独占一行">
            <el-switch
              v-model="searchForm.oneLine"
              active-text="是"
              inactive-text="否">
            </el-switch>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'fieldView',
  data () {
    return {
      listForm: {},
      addForm: {},
      searchForm: {}
    }
  },
  methods: {
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
  .title {
    height: 60px;
    line-height: 60px;
  }
</style>
