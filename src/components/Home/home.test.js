import React from "react";
import { shallow } from "enzyme";

import Name from "./Name.jsx";

describe("home page", () => {
  const tempProps = { name: "Testing Name" };

  let getComponent = props => {
    let comp = shallow(<Name {...props} />);
    return comp;
  };
  let component = getComponent(tempProps);

  it("should show my name", () => {
    // let component = shallow(<Name />);
    let wrapper = component.find(`[data-test='name']`);
    expect(wrapper.length).toBe(1);
  });

  it("should say Bradley's Pagerino", () => {
    let wrapper = component.find(`[data-test='name']`);
    expect(wrapper.text()).toEqual("Testing Name");
  });
});
