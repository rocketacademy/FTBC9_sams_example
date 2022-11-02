import React from "react";
export default class Counter extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h3>{this.props.count}</h3>
        <button onClick={() => this.props.handlePlus(this.props.name)}>
          +
        </button>
      </div>
    );
  }
}
