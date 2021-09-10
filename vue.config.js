module.exports = {
  lintOnSave: true,
  devServer: {
    proxy: {
      "/api": {
        target: "http://test.my-site.com",
      },
    },
  },
};
