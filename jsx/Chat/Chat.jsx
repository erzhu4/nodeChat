import React from 'react';

export default class Chat extends React.Component {
    constructor(props){
        super(props);

        this.state = {
        	chats: [],
            inputValue: "",
            userName: null,
            errorMsg: null,
        	socket: null
        };

        this.state.socket = props.socket;

        this.state.socket.on(this.props.recievedEvent, (data) => {
            this.chatRecieved(data);
        });
    }

    chatRecieved(data){
        var list = this.state.chats;
        list.push(data);
        this.setState({chats: list});
    }

    validateSubmit(){
        if (!this.state.userName || this.state.userName.length == 0){
            this.setState({errorMsg: "Please Enter a name to send chat"});
            return false;
        }

        if (!this.state.inputValue || this.state.inputValue.length == 0){
            this.setState({errorMsg: null});
            return false;
        }
        this.setState({errorMsg: null});
        return true;
    }

    handleInputText(event){
        this.setState({inputValue: event.target.value});
    }

    handleUserNameChange(event){
        var userName = event.target.value;
        this.setState({userName: userName});  
    }

    submitInput(event){
        if (!this.validateSubmit()){
            return;
        }
        this.state.socket.emit(this.props.submitEvent, {username: this.state.userName, text: this.state.inputValue});
        this.setState({inputValue: ""});
    }

    renderErrorMessage(){
        if (!this.state.errorMsg || this.state.errorMsg.length == 0){
            return null;
        } else {
            return <div style={{color:'red'}}>{this.state.errorMsg}</div>;
        }
    }

    renderChatList(){
        if (this.state.chats.length == 0){
            return <div>None to display</div>;
        }
        return this.state.chats.map((el, idx) => {
            return <div key={idx}><span style={{fontWeight: 'bold'}}>{el.username}: </span><span>{el.text}</span></div>;
        });
    }

    render() {
    	return (
            <div className="row">
                <div className="col-md-12">
                    <div className="card-body">
                            {this.renderChatList()}
                    </div>
                    <div className="card-body">
                        {this.renderErrorMessage()}
                        <div className="row">
                            <div className="col-md-2">
                                <label>Your Name: <input className="form-control" onChange={this.handleUserNameChange.bind(this)} /></label>
                            </div>
                            <div className="col-md-8">
                                <textarea name="input-text" value={this.state.inputValue} onChange={this.handleInputText.bind(this)} className="form-control" placeholder="Message...."></textarea>
                            </div>
                            <div className="col-md-2"><button type="submit" onClick={this.submitInput.bind(this)} className="btn btn-primary">Submit</button></div>
                        </div>
                    </div>
                </div>
            </div>
		);
    }
}