var path = require('path');

var chessModule = {

    entry: [
        './jsx/Chess/chess.jsx'
    ],

    output: {
        filename: 'chess.js',
        path: path.join(__dirname, '../public/js')
    },

    module : {
        rules : [
            {
                test : /\.jsx?/,
                loader : 'babel-loader'
            }
        ]
    }

};

module.exports = chessModule;