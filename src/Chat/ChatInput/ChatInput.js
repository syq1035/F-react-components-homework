import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageText: '',
    };
  }

  sendMessage = () => {
    this.props.addMessage({ text: this.state.messageText, role: 'CUSTOMER' });
    this.setState({
      messageText: '',
    });
  };

  handleMessageText = (e) => {
    this.setState({
      messageText: e.target.value,
    });
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" value={this.state.messageText} onChange={this.handleMessageText} />
        <button type="button" onClick={this.sendMessage}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
