const HTMLWebpackPlugin = require('html-webpack-plugin')
import config from './webpack.config'

export default {
    ...config,
    entry: "./main.ts",
    module: {
        rules: [
            ...config.module.rules,  
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ] 
    },
    plugins: [...config.plugins, new HTMLWebpackPlugin({
        template: './index.html'
    })]
}