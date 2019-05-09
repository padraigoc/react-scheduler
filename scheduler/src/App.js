import React from 'react';
import './App.css';

class App extends React.Component {

  //ES6
  constructor() {
    super();
    this.state = {
      title: 'Simple CRUD app',
      users: [],
    }
  }

  //make AJAX calls here
  componentDidMount(){
    console.log('Component has mounted');

  }

  addUser(event) {
    event.preventDefault();//prevents spinning

    console.log("Button clicked");

    let data = {
      first_name : this.refs.user_name.value,
      last_name : this.refs.user_last_name.value,
      location : this.refs.locationName.value,
      pod: this.refs.teamName.value,
      title: this.refs.title.value,
      startDate: this.refs.startDate.value,
      email: this.refs.email.value
    }

    if(data.first_name === ""){
      alert("Please enter a first name")
    } else if(data.last_name === "") {
      alert("Please enter a last name") 
    }  else if(data.location === "") {
      alert("Please enter a location")
    }  else if(data.pod === "") {
      alert("Please enter a Team")
    }  else if(data.title === "") {
      alert("Please enter a Title")
    }  else if(data.startDate === "") {
      alert("Please enter a Start Date")
    }  else if(data.email === "") {
      alert("Please enter an E-mail")
    } else {
  
    //build out request
    var req = new Request('http://localhost:3001/api/new-user', {
      //configuration object
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json'}),
      body: JSON.stringify(data)
    })

    fetch(req)
    .then((res) => {
      res.json()
      
      .then((data) => {
        console.log(data)
      })
    })
    alert("User Added")
    this.refs.user_name.value = ""
    this.refs.user_last_name.value = ""
    this.refs.locationName.value = ""
    this.refs.teamName.value = ""
    this.refs.title.value = ""
    this.refs.startDate.value = ""
    this.refs.email.value = ""
  }
  }

  render() {
    let title = this.state.title;
  return (
    <div className="App">
     <h1>{title}</h1>
     <form red="userForm">
       <input type="text" ref="user_name" placeholder="First name" / ><br /><br />
       <input type="text" ref="user_last_name" placeholder="Last name" / ><br /><br />

       <p>Location</p>
       <select ref="locationName" form="locationform">
         <option value="" disabled selected> -- Please Select -- </option>
         <option value="vancouver">Vancouver</option>
         <option value="Bucharest">Bucharest</option>
         <option value="Mexico">Mexico</option>
       </select><br /><br />

       <p>Pod</p>
       <select ref="teamName" form="teamForm">
         <option value="" disabled selected> -- Please Select -- </option>
         <option value="enterpriseTeam">Enterprise</option>
         <option value="billing">Billing</option>
         <option value="technical">Technical</option>
         <option value="technical">Night Team</option>
       </select><br /><br />

       <p>Title</p>
       <select ref="title" form="titleForm">
         <option value="" disabled selected> -- Please Select -- </option>
         <option value="EnterpriseAdvocate">Enterprise Advocate</option>
         <option value="BillingAdvocate">Billing Advocate</option>
         <option value="TechnicalAdvocate">Technical Advocate</option>
         <option value="NightTeamAdvocate">Night Team Advocate</option>
       </select><br /><br />

       <p>Start Date</p>
       <input type="date" ref="startDate"></input><br /><br />

       <p>E-mail</p>
       <input type="email" ref="email"></input><br /><br />

       <button onClick={this.addUser.bind(this)}> Add </button>
     </form>
    </div>
  );
}
}

export default App;
