import React from "react";
import "./AutoFocusTextInput.css";

class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focus();
  }

  render() {
    return (
      <input onChange={this.props.handleInputChange} ref={this.textInput} />
    );
  }
}

export default AutoFocusTextInput;
