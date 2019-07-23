import React, { Component } from "react";

const saveName = WrappedComponent => {
  class SaveName extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: ""
      };

      this.saveNameToState = this.saveNameToState.bind(this);
    }
    saveNameToState(e) {
      this.setState({
        name: e.target.value
      });
    }
    render() {
      return (
        <WrappedComponent
          change={this.saveNameToState}
          name={this.state.name}
        />
      );
    }
  }
  return SaveName;
};

export default saveName;
