import React, { Component } from 'react';
import "./Footer.css";
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import Paper from 'material-ui/Paper';

class Footer extends Component {

  render() {
    const style = {
      height: 'auto',
      width: 100 + 'vw',
      margin: 0,
      textAlign: 'center',
    };
    //Name placeholders TODO
    return (
      <Paper style={style} zDepth={1}>
        <IconButton
          iconClassName="fab fa-github" tooltip="sim" iconStyle={{color: 'black'}}
          tooltipPosition="center"
        />
        <IconButton
          iconClassName="fab fa-github" tooltip="immittant"
          tooltipPosition="center"
        />
        <IconButton
          iconClassName="fab fa-github" tooltip="argumenti"
          tooltipPosition="center"
        />
        <IconButton
          iconClassName="fab fa-github" tooltip="societati"
          tooltipPosition="center"
        />
      </Paper>
    );
  }
}

export default Footer;
