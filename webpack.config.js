var webpack = require('webpack');

var chatModule = require('./webpack_modules/webpack_mainchat.js');
var chessModule = require('./webpack_modules/webpack_chess.js');

module.exports = [chatModule, chessModule];