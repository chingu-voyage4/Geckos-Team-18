import React, { Component } from 'react';
import { RaisedButton, TextField } from 'material-ui';

import './RegistrationCard.css';

class RegistrationCard extends Component {
    render() {
        return (
            <div className="registrationCard">
                <TextField  hintText='Handle' /> <br/>
                {/* <TextField  hintText='Email address' /><br/>
                <TextField  hintText='Password' /><br/> */}


                {/* NEXT ITEM */}
                {/* When this button is clicked, store the handle and go to the index page */}
                <RaisedButton backgroundColor='#F4175A' label='Create account' secondary={true}/>
            </div>
        );
    }
}

export default RegistrationCard;