import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    }
  }

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  charsLeft = () => {
    let x  = (this.props.maxChars - this.state.message.length)
    return x
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleMessageChange}/>
        <h3>{this.charsLeft()} Characters Left</h3>
      </div>
    );
  }
}

export default TwitterMessage;
