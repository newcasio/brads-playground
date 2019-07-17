//this is the HOC because it will take a component and add functionality to it (add the increment function)

import React, { Component } from "react";

const UpdatedComponent = (OriginalComponent, incrementBy) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0
      };
    }
    incrementCount = () => {
      this.setState(prevState => {
        return { count: prevState.count + incrementBy };
      });
    };
    render() {
      return (
        <OriginalComponent
          counter={this.incrementCount}
          currentCount={this.state.count}
          {...this.props}
          //name = {this.props.name}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;

//OriginalComponent taken as the argument.
//props/data added to OriginalComponent.
//NewComponent created, in the end this is returned.

//import this UpdatedComponent into the component file which is to be used as the argument.
//apply this function in the `export default UpdatedComponent(component)`
//this is exporting what is returned from the HOC
