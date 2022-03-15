const webpack = require('webpack');

module.exports = {
    entry: './index.js',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        })
    ]
};