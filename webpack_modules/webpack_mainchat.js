var path = require('path');

var chatModule = {

    entry: [
        './jsx/MainComponent.jsx'
    ],

    output: {
        filename: 'main_chat.js',
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

module.exports = chatModule;