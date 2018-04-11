import React, { Component }  from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ActionSearch from 'material-ui/svg-icons/action/search';
import SocialNotifications from 'material-ui/svg-icons/social/notifications';
import ImageColorLens from 'material-ui/svg-icons/image/color-lens';
import { TextField, RaisedButton } from 'material-ui';
import { white } from 'material-ui/styles/colors';

import './OptionsMenu.css';

class OptionsMenu extends Component {
    render(){
        return (
            <div className="optionsMenu">
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
                    <div className="title">
                        <p>Options</p>
                    </div>
                    <Divider/>
                    <List>
                        <ListItem primaryText={<p>Change Message Color</p>}
                         style={{color:'white'}}
                        leftIcon={<ImageColorLens color={white} />}
                        nestedItems={[
                            <ListItem
                             key={4}
                            primaryText={<p>Test</p>}
                            />]}
                        key={1}
                        />
                        <Divider/>
                        <ListItem primaryText={<p>Notification Settings</p>}
                         style={{color:'white'}}
                        leftIcon={<SocialNotifications color={white} />}
                        nestedItems={[
                            <ListItem
                            key={5}
                            primaryText={<p>Test</p>}
                            />]}
                        key={2}
                        />
                        <Divider/>
                        <ListItem primaryText={<p>Conversation Search</p>}
                        style={{color:'white'}}
                        leftIcon={<ActionSearch color={white} />}
                        nestedItems={[
                            <TextField key={6}/>,
                            <RaisedButton label="Search" key={7}/>
                        ]}
                        key={3}
                        />                       
                    </List>
            </div>
        )
    }
};

export default OptionsMenu;