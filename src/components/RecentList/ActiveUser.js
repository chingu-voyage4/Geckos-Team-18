import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import { orange100 } from 'material-ui/styles/colors';
import { ListItem } from 'material-ui/List';

import './ActiveUser.css';

class ActiveUser extends Component {
    render() {
        return (
            <ListItem className='Active-user'
            hoverColor={orange100}
            primaryText={this.props.user.name}
            secondaryText='is online!'
            leftAvatar={<Avatar src={this.props.user.image} size={30} />}
            rightIcon={<CommunicationChatBubble />}
            />
        );    
    }
}
export default ActiveUser;