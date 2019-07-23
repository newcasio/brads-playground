import React, { Component } from "react";

import "./animation.css";

class See extends Component {
  render() {
    const { title, description } = this.props;
    return (
      <div className="see">
        <h3 data-test="titleValue">{title}</h3>
        <h4>Description:</h4>
        <h4 data-test="descriptionValue">{description}</h4>
      </div>
    );
  }
}

export default See;
