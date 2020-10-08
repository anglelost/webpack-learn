const path =require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    devServer: {
        open:true,
        port:3000,
        contentBase:"src",
        hot:true
    },
    mode: "development",
    plugins: [new HtmlWebpackPlugin({
        template:"src/index.html",
        filename: "index.html"
    })],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.less$/,
                use: [ 'style-loader', 'css-loader' ,'less-loader']
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader' ,'sass-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: "url-loader?limit=3444&name=[name].[ext]"
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                  /*  options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }*/
                }
            }
            // {
            //     test: /\.(png|jpg|gif)$/,
            //     use: "file-loader"
            // }
        ]
    }
}


