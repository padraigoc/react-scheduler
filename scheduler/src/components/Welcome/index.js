import React, { Component } from 'react';
import { Button } from 'reactstrap';

class test extends Component {

    componentDidMount(){

    }

    
    render() {
        return (
            <div>
           
     
        <Button color="danger" href="/users/new">Add User</Button><br/><br/>
        <Button color="danger" href="/users">View Users</Button><br/><br/>
        <Button color="danger" href="/calendar">View Calendar</Button><br/>  
    
                
            </div>
        );
    }
}

export default test;