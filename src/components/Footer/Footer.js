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
          <a href='https://github.com/dontehightower' target='_blank' rel='noopener noreferrer'>
            <IconButton
              iconClassName="fab fa-github" tooltip="Donte" tooltipPosition="top"
            />
          </a>
          <a href='https://github.com/mjd123' target='_blank' rel='noopener noreferrer'>
            <IconButton
              iconClassName="fab fa-github" tooltip="Marcus" tooltipPosition="top"
            />
          </a>
          <a href='https://github.com/cadmoral' target='_blank' rel='noopener noreferrer'>
            <IconButton
              iconClassName="fab fa-github" tooltip="Carla" tooltipPosition="top"
            />
          </a>
          <a href='https://github.com/NatRavenhill' target='_blank' rel='noopener noreferrer'>
            <IconButton
              iconClassName="fab fa-github" tooltip="Nat" tooltipPosition="top"
            />
          </a>
        </Paper>
      </div>
    );
  }
}

export default Footer;
