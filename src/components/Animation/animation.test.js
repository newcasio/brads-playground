import React from "react";
import { shallow } from "enzyme";

import See from "./See.jsx";

describe("animation TDD", () => {
  let tempProps = { title: "Test message", description: "Test description" };

  const componentCreator = props => {
    let wrapper = shallow(<See {...props} />);
    return wrapper;
  };

  let component = componentCreator(tempProps);

  it("should render a title with Test message", () => {
    let wrapper = component.find(`[data-test='titleValue']`);
    expect(wrapper.text()).toEqual("Test message");
  });

  it("should render a description with Test description", () => {
    let wrapper = component.find(`[data-test='descriptionValue']`);
    expect(wrapper.text()).toEqual("Test description");
  });
});
