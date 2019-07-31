import React from "react";
import { shallow } from "enzyme";

import See from "./See.jsx";

describe("animation TDD", () => {
  let tempProps = { title: "Test message", description: "Test description" };
  let component;

  beforeEach(() => {
    const componentCreator = props => {
      let wrapper = shallow(<See {...props} />);
      return wrapper;
    };

    component = componentCreator(tempProps);
  });

  it("should render a title with Test message", () => {
    let wrapper = component.find(`[data-test='titleValue']`);
    expect(wrapper.text()).toEqual("Test message");
  });

  it("should render a description with Test description", () => {
    let wrapper = component.find(`[data-test='descriptionValue']`);
    expect(wrapper.text()).toEqual("Test description");
  });

  it("should render one <See/> component", () => {
    let wrapper = component.find(`[data-test="seeComponent"]`);
    expect(wrapper.length).toBe(1);
  });
});
