import React from 'react';
import { Button } from 'reactstrap';


const index = (props) => {
    return (
        <div>
        <Button color="danger" href="/users/new">Add User</Button><br/><br/>
        <Button color="danger" href="/users">View Users</Button><br/>
        </div>
    );
};

export default index;