import React from "react";
import User from "./User";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      firstName: "",
      lastName: "",
      email: "",
      dob: "",
      age: 0,
    };
  }

  componentDidUpdate() {
    console.log(this.state.users);
  }

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // let arrayOfData = [...Object.entries(this.state)];
    // alert(
    //   `Some data has been received: ${this.state.firstName}, ${this.state.lastName}, ${this.state.email}, ${this.state.dob}, ${this.state.age}`
    // );

    // console.log(arrayOfData);

    let user = { ...this.state };

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      dob: "",
      age: 0,
      users: [...this.state.users, user],
    });
  };
  blurEvent = (e, input) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(name, value);
  };

  render() {
    return (
      <div>
        <h1>Data form</h1>
        <form onSubmit={this.handleSubmit}>
          <label>First Name</label>
          <br />
          <input
            onChange={this.handleChange}
            // passing in event and argument to blur event
            onBlur={(e) => this.blurEvent(e, "matt")}
            type="text"
            value={this.state.firstName}
            name="firstName"
            placeholder="First name here"
          />
          <br />

          <label>Last Name</label>
          <br />
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.lastName}
            name="lastName"
            placeholder="Last name here"
          />
          <br />
          <label>Email</label>
          <br />
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.email}
            name="email"
          />
          <br />
          <label>Date of Birth</label>
          <br />
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.dob}
            name="dob"
          />
          <br />
          <label>Age</label>
          <br />
          <input
            onChange={this.handleChange}
            type="number"
            value={this.state.age}
            name="age"
          />
          <br />
          <input type="submit" value="submit" />
        </form>

        {/* Spread operator below - each state key-value pair is being injected into the User component, using the spread operator  */}
        {/* <User {...this.state} /> */}

        {/* 
        Without the spread operator 
        <User 
        firstName = {this.state.firstName} 
        lastName = {this.state.lastName} 
        email = {this.state.email} 
        dob = {this.state.dob} 
        age = {this.state.age} 
        
        />
        */}

        {this.state.users && this.state.users.length > 0 ? (
          this.state.users.map((user) => <User {...user} />)
        ) : (
          <p>Sam failed</p>
        )}
      </div>
    );
  }
}

export default Form;
