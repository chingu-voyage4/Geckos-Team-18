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
import io from 'socket.io-client';

import { RECORD_NAME } from '../../actions/types';

class RegistrationCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.socket = io('localhost:8080');

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        // {/* NEXT ITEM */ }
        // {/* Store the handle for use when sending messages */ }
            // send this.state.value to the socket-server and launch a join event
        // {/* Associate Socket ID & handle so that any message from a unique id */ }
        // {/* displays that it was sent from the associated handle */ }
        this.socket.emit('create_user', (this.state.value));
        this.socket.emit('join', (this.state.value));
        this.props.dispatch({
            type: RECORD_NAME,
            name: this.state.value
        });
    }

    render() {
        return (
            <div className="registrationCard">
                <TextField
                    id='handle'
                    hintText='Handle'
                    onChange={this.handleChange}
                />
                <Link to='/chat'>
                    <RaisedButton
                        backgroundColor='#F4175A'
                        label='Create account'
                        secondary={true}
                        onClick={this.handleSubmit}
                        />
                </Link>
            </div>
        );
    }
}

export default RegistrationCard;