/**
 * article模块接口列表
 */

import base from './base' // 导入接口域名列表
import axios from '../utils/http' // 导入http中创建的axios实例
// import qs from 'qs' // 根据需求是否导入qs模块

const field = {
  // 新闻列表
  fieldList (designId) {
    return axios.get(`${base.bd}/field/getList`, {
      params: {
        designId: designId
      }
    })
  },
  columnList (tableName) {
    return axios.get(`${base.bd}/table/getFields`, {
      params: {
        tableName: tableName
      }
    })
  },
  changeShow (id, type, state) {
    return axios.get(`${base.bd}/field/changeShow`, {
      params: {
        id: id,
        type: type,
        state: state
      }
    })
  }
}

export default field
