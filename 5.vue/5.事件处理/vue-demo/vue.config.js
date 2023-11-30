const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      "/s":{
        target:"https://www.baidu.com/",
        changeOrigin:true
      }
    }
  }
})
