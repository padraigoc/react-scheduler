import React, { Component } from 'react';
import { Button, FormGroup, Label, CustomInput, Input, FormText} from 'reactstrap';




class UserForm extends Component {
    
  //ES6
  constructor() {
    super();
    this.state = {
      title: 'Simple CRUD app',
    //  users: [],
    }
  }
  
  

  //make AJAX calls here
  componentDidMount(){
    console.log('Component has mounted');

  }

  addUser(event) {
    event.preventDefault();//prevents spinning

    let user_data = {
      first_name : this.refs.user_name.value,
      last_name : this.refs.user_last_name.value,
      location : this.refs.locationName.value,
      pod: this.refs.teamName.value,
      title: this.refs.title.value,
      startDate: this.refs.startDate.value,
      email: this.refs.email.value
    }

    if(user_data.first_name === ""){
      alert("Please enter a first name")
    } else if(user_data.last_name === "") {
      alert("Please enter a last name") 
    }  else if(user_data.location === "") {
      alert("Please enter a location")
    }  else if(user_data.pod === "") {
      alert("Please enter a Team")
    }  else if(user_data.title === "") {
      alert("Please enter a Title")
    }  else if(user_data.startDate === "") {
      alert("Please enter a Start Date")
    }  else if(user_data.email === "") {
      alert("Please enter an E-mail")
    } else {
  
    //build out request
    var req = new Request('http://localhost:3001/api/new-user', {
      //configuration object
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json'}),
      body: JSON.stringify(user_data)
    })

    fetch(req)
    .then((res) => {
      res.json() 
      .then((data) => {
        //console.log(data)
        //if we want to print out users here
        //we now have the data
        
        // let users = this.state.users;
        // console.log("Here are the users" + users);

        // users.push(user_data);
        // this.setState({
        //   users: users
        // })
        
      })
    })

    .catch((err) => {
      console.log(err);
    })
    this.refs.user_name.value = ""
    this.refs.user_last_name.value = ""
    this.refs.locationName.value = ""
    this.refs.teamName.value = ""
    this.refs.title.value = ""
    this.refs.startDate.value = ""
    this.refs.email.value = ""
    alert("User Added")
  }
  }

  render() {
    let title = this.state.title;
    // let users = this.state.users;
  return (
    <div className="App">
     <h1>{title}</h1>
     <form red="userForm">
       <input type="text" ref="user_name" placeholder="First name" / ><br /><br />
       <input type="text" ref="user_last_name" placeholder="Last name" / ><br /><br />

       <p>Location</p>
       <select ref="locationName" form="locationform">
         <option value=""> -- Please Select -- </option>
         <option value="vancouver">Vancouver</option>
         <option value="Bucharest">Bucharest</option>
         <option value="Mexico">Mexico</option>
       </select><br /><br />

       <p>Pod</p>
       <select ref="teamName" form="teamForm">
         <option value=""> -- Please Select -- </option>
         <option value="enterpriseTeam">Enterprise</option>
         <option value="billing">Billing</option>
         <option value="technical">Technical</option>
         <option value="technical">Night Team</option>
         <option value="leadershipTeam">Leadership</option>
       </select><br /><br />

       <p>Title</p>
       <select ref="title" form="titleForm">
         <option value=""> -- Please Select -- </option>
         <option value="Enterprise Advocate">Enterprise Advocate</option>
         <option value="Billing Advocate">Billing Advocate</option>
         <option value="Technical Advocate">Technical Advocate</option>
         <option value="Night Team Advocate">Night Team Advocate</option>
         <option value="TeamLead">Team Lead</option>
         <option value="ledership">Leadership</option>
       </select><br /><br />

       <p>Start Date</p>
       <input type="date" ref="startDate"></input><br /><br />

       <p>E-mail</p>
       <input type="email" ref="email"></input><br /><br />
      
       <button onClick={this.addUser.bind(this)}> Add </button> <br /><br />

       <Button color="danger" href="/">Home</Button>

       {/* <pre>{JSON.stringify(users)}</pre> */}
     </form>
    </div>
  );
}
}

export default UserForm;