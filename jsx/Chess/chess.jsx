import React from 'react';
import ReactDOM from 'react-dom';

import ChessGame from 'ez-chess';

var io = require('socket.io-client');

export default class ChessComponent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
        	chats: [],
        	chessGame: null,
        	socket: null
        };
        this.state.chessGame = new ChessGame();
        this.state.socket = io.connect();
    }

    render() {
    	return (
            <div className="container">
                <div className="row">

                </div>
            </div>
		);
    }
}

if (document.getElementById('chess-container')) {
    ReactDOM.render(<ChessComponent />, document.getElementById('chess-container'));
}