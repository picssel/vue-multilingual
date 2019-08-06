// ref: https://cli.vuejs.org/config/#vue-config-js
module.exports = {
    devServer: {
        port: 3400
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/demos/vue-multilingual/'
        : '/'
};
