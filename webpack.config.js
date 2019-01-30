const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'public/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
},
  module: {
    rules: [
        {
            test: /\.js$/,
            use: [{
                loader: 'babel-loader'
            }]
        }
    ]
},
};
