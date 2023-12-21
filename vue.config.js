const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    // historyApiFallback: true,
    proxy: {
      "/api/v1/fo": {
        target: process.env.VUE_APP_API,
        changeOrigin: true,
        secure: false,
        ws: false,
      },
    },
  },
  filenameHashing: true,
  configureWebpack: (config) => {
    config.output.filename = "js/[name].[hash].js";
    config.output.chunkFilename = "js/[name].[hash].js";
  },
  // configureWebpack: {
  //     optimization: {
  //         minimizer: [new TerserPlugin()] // js minify
  //     },
  //     // plugins: [new BundleAnalyzerPlugin()],
  // },
  // css: {
  //     sourceMap: false
  // },
  // configureWebpack: {
  //     // plugins: [new BundleAnalyzerPlugin()],
  //
  // },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "vue3Base";
      args[0].meta = { viewport: "user-scalable=no" };

      return args;
    });
  },
});
