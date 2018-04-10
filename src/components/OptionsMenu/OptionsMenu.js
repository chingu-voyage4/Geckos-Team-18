import React, { Component }  from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ActionSearch from 'material-ui/svg-icons/action/search';
import SocialNotifications from 'material-ui/svg-icons/social/notifications';
import ImageColorLens from 'material-ui/svg-icons/image/color-lens';
import { TextField, RaisedButton } from 'material-ui';
import { black } from 'material-ui/styles/colors'; // changed frome white to black

import './OptionsMenu.css';

class OptionsMenu extends Component {
    render(){
        return (
            <div class="optionsMenu">
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
                    <div class="title">
                        <p>Options</p>
                    </div>
                    <Divider/>
                    <List>
                        <ListItem primaryText={<p>Change Message Color</p>}
                         style={{color:'black'}}
                        leftIcon={<ImageColorLens color={black} />}
                        nestedItems={[
                            <ListItem
                             key={1}
                            primaryText={<p>Test</p>}
                            />]}
                        />
                        <Divider/>
                        <ListItem primaryText={<p>Notification Settings</p>}
                         style={{color:'black'}}
                        leftIcon={<SocialNotifications color={black} />}
                        nestedItems={[
                            <ListItem
                            key={1}
                            primaryText={<p>Test</p>}
                            />]}
                        />
                        <Divider/>
                        <ListItem primaryText={<p>Conversation Search</p>}
                        style={{color:'black'}}
                        leftIcon={<ActionSearch color={black} />}
                        nestedItems={[
                            <TextField/>,
                            <RaisedButton label="Search" />
                        ]}
                        />
                    </List>
            </div>
        )
    }
};

export default OptionsMenu;
