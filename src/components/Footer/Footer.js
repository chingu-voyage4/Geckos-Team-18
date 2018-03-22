import React, { Component } from 'react';
import "./Footer.css";
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';

// The following imports were initially required, but not used within the components
  // import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
  // import FontIcon from 'material-ui/FontIcon';
  // import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

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
      <div className='footer'>
        <Paper style={style} zDepth={1}>
          <IconButton
            iconClassName="fab fa-github" tooltip="sim" iconStyle={{color: 'white'}}
            tooltipPosition="center"
          />
          <IconButton
            iconClassName="fab fa-github" tooltip="immittant" iconStyle={{ color: 'white' }}
            tooltipPosition="center"
          />
          <IconButton
            iconClassName="fab fa-github" tooltip="argumenti" iconStyle={{ color: 'white' }}
            tooltipPosition="center"
          />
          <IconButton
            iconClassName="fab fa-github" tooltip="societati" iconStyle={{ color: 'white' }}
            tooltipPosition="center"
          />
        </Paper>
      </div>
    );
  }
}

export default Footer;
