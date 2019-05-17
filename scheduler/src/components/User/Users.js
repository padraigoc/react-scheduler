import React, { Component } from 'react';
import { Button, Table } from 'reactstrap';

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
          users: [],
        }
      }

  //make AJAX calls here
  componentDidMount(){
    console.log('Component has mounted');
    fetch('http://localhost:3001/api/users')
    .then((res) => {
      res.json()
      .then((data) => {
        this.setState({
          users: data
        })
      })
    })
  }

  removeItem(id){
    console.log(this);
    let users = this.state.users;

    let user = users.find(item => {
      return item.id === id
    })
    console.log(user);

    const req = new Request('http://localhost:3001/api/users/remove/' + id,{
      method: 'DELETE'  
  });

  fetch(req)
  .then(res => {
    res.json()
     .then(data => {
    const updatedItems = this.state.users.filter(item => item.id !== id)
    this.setState({ users: updatedItems })

    alert('User removed');
     })
  })
}
 
    render() {
        return (
        <div>
            <Button color="danger" href="/">Home</Button>
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