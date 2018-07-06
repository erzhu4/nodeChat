import React from 'react';

export default class Chat extends React.Component {
    constructor(props){
        super(props);

        this.state = {
        	chats: [],
        	socket: null
        };

        this.state.socket = props.socket;
    }

    render() {
    	return (
            <div className="row">
                <div className="col-md-12">
                    CHAT COMPONENT
                </div>
            </div>
		);
    }
}