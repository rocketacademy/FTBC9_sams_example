import React from "react";

export default class AddCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "" };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Child running submit");
    // Here is where we lift state
    this.props.newCounter(this.state.name);
    this.setState({
      name: "",
    });
  };

  render() {
    return (
      <div style={{ backgroundColor: "grey" }}>
        <h2 style={{ margin: 0 }}>Add new Counter</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            style={{ width: "45vw" }}
            type="text"
            value={this.state.name}
            placeholder="Insert new Counter name here"
            name="name"
            onChange={(e) => this.handleChange(e)}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
