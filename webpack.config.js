const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.res olve(__dirname, 'dist'),
        publicPath: '',
        filename: '[name].js'
    },
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                      }, 
                       {
                         loader: "css-loader",
                       },
                       {
                         loader: "postcss-loader"
                       },
                       {
                         loader: "sass-loader",
                         options: {
                           implementation: require("sass")
                         }
                       },
                       
                     ]
              },
              {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
              },
        ],
    },
    plugins: [

        new MiniCssExtractPlugin({
          filename: "[name].css"
        })
      
      ],
    mode: 'development'
}