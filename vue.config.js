module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/' : '/', // cdn 需要配置的路径  //id.jd.com/www/play/   //static.360buyimg.com/play/
  lintOnSave: false, // 是否自动开启eslint 检查
  productionSourceMap: false,
  devServer: {
    port:8089,
    host:"local.jd.com",
    disableHostCheck: true
  }
}