import React, { Component } from 'react'; 
import {BrowserRouter,  Route} from 'react-router-dom';
import Welcome from './components/Welcome/index';
import Users from './components/User/Users';
import UserForm from './components/User/UserForm';


class Routes extends Component {

        render(){
            return(
                <BrowserRouter>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/Users" component={Users} /> 
                    <Route exact path="/Users/New" component={UserForm} />        
                </BrowserRouter>
            )
        }
}

export default Routes;