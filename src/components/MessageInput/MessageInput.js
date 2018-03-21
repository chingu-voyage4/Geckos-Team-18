import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemePRovider, { RaisedButton } from 'material-ui';

class MessageInput extends Component {
  constructor(props) {
    super(props);
    const { fromMeStyle, toMeStyles } = this.styles;
  }
  
  render() {
    return (
    <form>
      <TextField 
        hintText='Place your message here'
        />
      <RaisedButton label='From Me' style={fromMeStyle} />
      <RaisedButton label='To Me' style={toMeStyles} />
    </form>
    );
  }

  const styles = {
    fromMeStyle: {
      backgroundColor: '#F4175A'
    },
    toMeStyles: {
      backgroundColor: '#fff'
    } 
  }
}

export default MessageInput;
