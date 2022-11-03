import React from "react";

export class FancyBorder extends React.Component {
  render() {
    return (
      <div className={"FancyBorder FancyBorder-" + this.props.colour}>
        {this.props.children}
      </div>
    );
  }
}

export class Dialog extends React.Component {
  render() {
    return (
      <FancyBorder colour="red">
        <h1 className="Dialog-title">{this.props.title}</h1>
        <p className="Dialog-message">{this.props.message}</p>
        <input type="text" value="Sam" />
        <h6>Sam's Fav pet - Leopard</h6>
      </FancyBorder>
    );
  }
}

export default class WelcomeDialog extends React.Component {
  render() {
    return (
      <Dialog
        title="Hello Wolrd"
        message="Anyone can code React, if we read some docs and wathc some tutorials"
      />
    );
  }
}
