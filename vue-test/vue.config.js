const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: [],  // 🚀 빈 배열 또는 특정 패키지 목록을 넣어야 함
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        pathRewrite: { '^/api': '/api' },
      },
    },
  },
});
