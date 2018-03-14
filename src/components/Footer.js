import React, { Component } from 'react';
import GitHubIcon from "../Icons/GitHub-Mark-Light-64px.png";
import "../Css/Footer.css";
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import IconButton from 'material-ui/IconButton';

const gitHub = <FontIcon className="fab fa-github" />;

class Footer extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
        <BottomNavigationItem
          label="methodo"
          icon={gitHub}
          onClick={() => this.select(0)}
        />
        <BottomNavigationItem
          label="eam "
          icon={gitHub}
          onClick={() => this.select(1)}
        />
        <BottomNavigationItem
          label="agendam"
          icon={gitHub}
          onClick={() => this.select(2)}
        />
        <BottomNavigationItem
          label="sumptum"
          icon={gitHub}
          onClick={() => this.select(3)}
        />
        </BottomNavigation>
      </Paper>
      /*<div className="Footer">
        <div className="icons">
          <img src={GitHubIcon} alt="Link to ... Github" onClick={window.open('anotherpage.html', '_blank')}/><p> methodo </p>
          <img src={GitHubIcon} alt="Link to ... Github" onClick={window.open('anotherpage.html', '_blank')}/><p> eam </p>
          <img src={GitHubIcon} alt="Link to ... Github" onClick={window.open('anotherpage.html', '_blank')}/><p> agendam </p>
          <img src={GitHubIcon} alt="Link to ... Github" onClick={window.open('anotherpage.html', '_blank')}/><p> sumptum </p>
        </div>
      </div>*/
    );
  }
}

export default Footer;
