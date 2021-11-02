const path = require('path');

module.exports = {
    entry: {
        pageEntry: "./ClientApp/index.tsx"
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.js$/, loader: "source-map-loader" },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                    priority: 10,
                    enforce: true
                },
                commons: {
                    name: "common",
                    minChunks: 2, //Forces an entry point and common chunk, otherwise the common bundle contains everything, which isn't desired.
                    chunks: "all"
                }
            }
        }
    },
    output: {
        path: path.resolve(__dirname, './wwwroot/dist'),
        filename: "[name].bundle.js",
        clean: true
    },
};