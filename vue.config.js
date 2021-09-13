module.exports = {
  lintOnSave: true,
  devServer: {
    open: true,
    proxy: {
      "/api": {
        target: "http://101.200.149.141:5888",
        changeOrigin: true,
        pathRewrite: {
          [`^/api`]: "",
        },
      },
    },
  },
};
