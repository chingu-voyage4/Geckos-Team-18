import React, { Component } from 'react';
import './Footer.css';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';

class Footer extends Component {
  render() {
    const style = {
      height: 'auto',
      width: 100 + 'vw',
      margin: 0,
      textAlign: 'center'
    };
    // Name placeholders TODO
    return (
      <div className='footer'>
        <Paper style={style} zDepth={1}>
          <IconButton
            iconClassName="fab fa-github" tooltip="Donte" iconStyle={{color: 'white'}}
            tooltipPosition="top"
          />
          <IconButton
            iconClassName="fab fa-github" tooltip="Marcus" iconStyle={{ color: 'white' }}
            tooltipPosition="top"
          />
          <IconButton
            iconClassName="fab fa-github" tooltip="Carla" iconStyle={{ color: 'white' }}
            tooltipPosition="top"
          />
          <IconButton
            iconClassName="fab fa-github" tooltip="Nat" iconStyle={{ color: 'white' }}
            tooltipPosition="top"
          />
        </Paper>
      </div>
    );
  }
}

export default Footer;
