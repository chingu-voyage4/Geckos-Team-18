import React, { Component } from 'react';
import GitHubIcon from "../Icons/GitHub-Mark-Light-64px.png";
import "../Css/Footer.css";
class Footer extends Component {

  render() {
    return (
      <div className="Footer">
        <div className="icons">
          <img src={GitHubIcon} alt="Link to ... Github" onClick={window.open('anotherpage.html', '_blank')}/><p> methodo </p>
          <img src={GitHubIcon} alt="Link to ... Github" onClick={window.open('anotherpage.html', '_blank')}/><p> eam </p>
          <img src={GitHubIcon} alt="Link to ... Github" onClick={window.open('anotherpage.html', '_blank')}/><p> agendam </p>
          <img src={GitHubIcon} alt="Link to ... Github" onClick={window.open('anotherpage.html', '_blank')}/><p> sumptum </p>
        </div>
      </div>
    );
  }
}

export default Footer;
