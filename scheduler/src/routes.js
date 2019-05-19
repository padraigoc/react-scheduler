import React, { Component } from 'react'; 
import {BrowserRouter,  Route} from 'react-router-dom';
import Welcome from './components/Welcome/index';
import Users from './components/User/Users';
import UserForm from './components/User/UserForm';
import Calendar from './components/Calendar';


class Routes extends Component {

    //getting users
    constructor(props) {
        super(props);
        this.state = {
          users: [],
        }
      }
    
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

        render(){
            return(             
                <BrowserRouter>
                    <Route exact path="/" component={Welcome}/>
                    <Route exact path="/Users/New" component={UserForm} />    
                    {/* <Route exact path="/Users" component={Users} />  */}
                    {/* https://tylermcginnis.com/react-router-pass-props-to-components/ */}
                    <Route exact path="/Users" render={(props) => <Users {...props} users={this.state.users} />}/> 
                    <Route exact path="/Calendar" component={Calendar} />   
                </BrowserRouter>
            )
        }
}

export default Routes;