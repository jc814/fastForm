/**
 * api接口的统一出口
 */
// 文章模块接口
import design from './design'
import field from './field'
// 其他模块的接口……

// 导出接口
export default {
  design,
  field
  // ……
}

/*
调用形式
this.$api.article.articleDetail(id, {
            api: 123
        }).then(res=> {
            // 执行某些操作
        })
 */
