// ref: https://cli.vuejs.org/config/#vue-config-js

module.exports = {
    devServer: {
        port: 3400
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/demos/vue-multilingual/'
        : '/',
    configureWebpack: {
        resolve: {
            alias: {
                "@": require("path").resolve(__dirname, "src"),
                "@pages": require("path").resolve(__dirname, "src/pages"),
                "@components": require("path").resolve(__dirname, "src/components"),
                "@header": require("path").resolve(__dirname, "src/components/Header"),
                "@footer": require("path").resolve(__dirname, "src/components/Footer"),
                "@navigation": require("path").resolve(__dirname, "src/components/Navigation"),
                "@langSelector": require("path").resolve(__dirname, "src/components/LangSelector"),
                "@languages": require("path").resolve(__dirname, "src/assets/lang")
            }
        }
    }
};
