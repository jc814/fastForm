/**
 * article模块接口列表
 */

import base from './base' // 导入接口域名列表
import axios from '../utils/http' // 导入http中创建的axios实例
// import qs from 'qs' // 根据需求是否导入qs模块

const design = {
  // 新闻列表
  designAdd (params) {
    return axios.post(`${base.bd}/design/insert`, params)
  },
  designList () {
    return axios.get(`${base.bd}/design/getList`)
  },
  tableList () {
    return axios.get(`${base.bd}/table/getTables`)
  },
  designDel (designId) {
    return axios.get(`${base.bd}/design/delete/${designId}`)
  }
  /* // 新闻详情,演示
  tableList (id, params) {
    return axios.get(`${base.sq}/topic/${id}`, {
      params: params
    })
  },
  // post提交
  login (params) {
    return axios.post(`${base.sq}/accesstoken`, qs.stringify(params))
  } */
  // 其他接口…………
}

export default design
