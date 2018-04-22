// List of Current/Recent users of the chat app. To be rendered
// on the left side of the page. This component is made into a 
// container and connected to the redux store.

import React, { Component } from 'react';
import ActiveUser from './ActiveUser';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import io from 'socket.io-client';

import './RecentList.css';

// Lists longer than 8 caused a bug with the footer.
// Change the code later to possibly include a scrollable list,
// or implement some other solution to maintain the single page
// nature of the application.

class RecentList extends Component {
    constructor(props){
        super(props);

        this.state ={
            users:[]
        };
        this.socket = io('localhost:8080');

        this.socket.on('update-people', (people) => {
            addUser(people);
        });

        const addUser = people => { // add data from server to state
            this.setState({users: [ ...this.state.users, people ]});
          };
}



renderUser(){
    return this.state.users.map(user => <ActiveUser key={user.socketid} user={user}/>);
}
    render() {
        return (
            <div className="RecentList">
            <List>
            <Subheader className='Subheader-list'>People Online</Subheader>
                {this.renderUser()}
            </List>
            <Divider/>
            </div>
        );
    }
}
export default RecentList;