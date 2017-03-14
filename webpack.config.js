var webpack = require('webpack');

//모듈로 내보내기, 다른코드에서도 이 객체를 사용할 수 있도록 하는 것
//클라이언트 사이드에서도 사용하고 코드를 한 파일로 합치는 기능
module.exports = {
    entry: './src/index.js',

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        hot : true,//수정시 리로드 되는 것
        inline: true,
        host : '0.0.0.0',
        port: 7777,
        contentBase: __dirname + '/public/' // index 파일 위치
    },

    module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        cacheDirectory: true,
                        presets: ['es2015', 'react']
                    }
                }
            ]
        },
      plugins: [
        new webpack.HotModuleReplacementPlugin()
      ]
};
