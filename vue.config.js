module.exports = {
  devServer: {
    proxy: {
      '/api/movie': {
        target: 'http://api.douban.com/v2/movie/subject',
        changeOrigin: true
      }
    }
  }
}