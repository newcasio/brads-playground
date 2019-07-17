import React, { Component } from "react";

import "./hoc.css";

class ClickCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="click__button">
        <button onClick={this.incrementCount}>Clicked {count} times</button>
        {/* <button onClick={this.incrementCount}>Clicked {count} times</button> */}
      </div>
    );
  }
}

export default ClickCounter;
