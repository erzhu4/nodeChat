import React from 'react';
import ReactDOM from 'react-dom';

import Chat from './Chat/Chat.jsx';

var io = require('socket.io-client');

export default class MainComponent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
        	chats: [],
        	socket: null
        };

        this.state.socket = io.connect();
    }

    render() {
    	return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <Chat 
                        	socket={this.state.socket}
                        	recievedEvent={"mainchatEmit"}
                        	submitEvent={"mainchatSubmit"}
                        />
                    </div>
                    <div className="col-md-4">
                        Something goes here
                    </div>
                </div>
            </div>
		);
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<MainComponent />, document.getElementById('app'));
}