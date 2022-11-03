import React from "react";

class User extends React.Component {
  render() {
    return (
      <div
        style={{ borderRadius: "25%", border: "solid #000 3px", margin: "5px" }}
      >
        {this.props.firstName ? (
          <p>{this.props.firstName}</p>
        ) : (
          <p>No user here</p>
        )}
        {this.props.lastName ? (
          <p>{this.props.lastName}</p>
        ) : (
          <p>No user here</p>
        )}
        {/* {this.props.COO ? <p>{this.props.COO}</p> : <p>No user here</p>} */}
        {this.props.email ? <p>{this.props.email}</p> : <p>No user here</p>}
        {this.props.age ? <p>{this.props.age}</p> : <p>No user here</p>}
        {this.props.dob ? <p>{this.props.dob}</p> : <p>No user here</p>}
      </div>
    );
  }
}

export default User;
