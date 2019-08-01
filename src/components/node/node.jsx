import React, { Component } from "react";
import "./node.css";

class Node extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: []
    };
  }

  //fetch, path is using proxy set up in package.json file.
  componentDidMount() {
    fetch("/api/customers")
      .then(res => res.json())
      .then(data => {
        this.setState({ customers: data });
      });
  }

  render() {
    return (
      <div className="centre__text">
        <h2>Customers</h2>
        <ul>
          {this.state.customers.map(el => {
            return (
              <li key={el.id}>
                {el.firstName} {el.lastName}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Node;
