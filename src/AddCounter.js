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
    this.props.newCounter(this.state.name);
    this.setState({
      name: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
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
