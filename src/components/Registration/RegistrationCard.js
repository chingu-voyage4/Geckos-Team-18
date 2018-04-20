// The RegistrationCard component will eventually be the entry point for 
// The application. It should display a form for a user to insert a handle
// When submitted, it should:
    // associate that handle with a unique socket ID,
    // open a socket for communication with the server,
    // redirect the user to the Chat page.

import React, { Component } from 'react';
import { RaisedButton, TextField } from 'material-ui';
import { Link } from 'react-router-dom';
import './RegistrationCard.css';

class RegistrationCard extends Component {
    render() {
        return (
            <div className="registrationCard">
                <TextField  hintText='Handle' /> <br/>
                {/* <TextField  hintText='Email address' /><br/>
                <TextField  hintText='Password' /><br/> */}


                {/* NEXT ITEM */}
                {/* Store the handle for use when sending messages */}
                {/* Associate Socket ID & handle so that any message from a unique id */}
                {/* displays that it was sent from the associated handle */}
                <Link to='/'>
                    <RaisedButton backgroundColor='#F4175A' label='Create account' secondary={true}/>
                </Link>
            </div>
        );
    }
}

export default RegistrationCard;