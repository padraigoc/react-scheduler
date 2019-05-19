import React, { Component } from 'react';
import { FormGroup, Label, Input, Button, Table } from 'reactstrap';


class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      query: ''
    }
  }

  //https://hackernoon.com/common-pitfall-in-initialising-state-based-on-props-in-react-js-d56795a944aa
  componentWillReceiveProps(nextProps){
    if(nextProps.users !== this.props.users){
        this.setState({users:nextProps.users});
    }
}

  removeItem(id){
    const req = new Request('http://localhost:3001/api/users/remove/' + id,{
      method: 'DELETE'  
  });
  fetch(req)
  .then(res => {
    res.json()
     .then(data => {
       //replace this.state.users with this.props.user as we're passing down state from routes
    const updatedItems = this.state.users.filter(item => item.id !== id)
    console.log("Updated users" + updatedItems )
    this.setState({ users: updatedItems })
    alert('User removed');
     })
  })
}
 
    render() {
        return (
        <div>
            <Button color="danger" href="/">Home</Button><br /><br />

            <FormGroup>
          <Label for="exampleSearch">Search</Label>
          <Input
            type="search"
            name="search"
            id="exampleSearch"
            placeholder="search by first name"
            onChange={this.searchHandler}
          />
        </FormGroup>

        <br />

            <FormGroup>
          <Label for="exampleSelect">Team</Label>
          <Input type="select" name="select" id="exampleSelect" onChange={this.teamChange}>
            <option>Please Select..</option>
            <option>Enterprise</option>
            <option>Billing</option>
            <option>Technical</option>
            <option>Night Team</option>
            <option>Leadership</option>
          </Input>
        </FormGroup>

            <Table>
                <thead>
                    <tr>
                     <th>First Name</th>
                     <th>Last Name</th>
                     <th>Team</th>
                     <th>Location</th>
                     <th>Title</th>
                     <th>Start Date</th>
                     <th>Email</th>
                     <th>Action</th>
                    </tr>
                </thead>
                
             <tbody>{this.state.users.map(item => { 
               return (
                  <tr key={item.id}>
                      <td>{item.FirstName}</td>
                      <td>{item.LastName}</td>
                      <td>{item.Team}</td>
                      <td>{item.Location}</td>
                      <td>{item.Title}</td>
                      <td>{item.StartDate}</td>
                      <td>{item.email}</td>
                      <td><Button color="danger" onClick={() => this.removeItem(item.id)}> Delete </Button>        
                      {' '}<Button color="danger" color="info"> Edit </Button></td>     
                  </tr>
                  )      
                }
              )}
             </tbody>
            </Table>
        </div>
        );
    }
}

export default Users;