import React, { Component } from 'react';
import { Button } from 'reactstrap';

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

    render() {
        return (
        <div>
            <Button color="danger" href="/">Home</Button>
            {/* <pre>{JSON.stringify(this.state.users)}</pre>      */}
            <table>
                <thead>
                    <tr>
                     <th>First Name</th>
                     <th>Last Name</th>
                     <th>Team</th>
                     <th>Location</th>
                     <th>Title</th>
                     <th>Start Date</th>
                     <th>Email</th>
                    </tr>
                </thead>
                
             <tbody>{this.state.users.map(function(item, key) {         
               return (
                  <tr key = {key}>
                      <td>{item.FirstName}</td>
                      <td>{item.LastName}</td>
                      <td>{item.Team}</td>
                      <td>{item.Location}</td>
                      <td>{item.Title}</td>
                      <td>{item.StartDate}</td>
                      <td>{item.email}</td>
                  </tr>
                  )      
                }
              )}
             </tbody>
            </table>
        </div>
        );
    }
}

export default Users;