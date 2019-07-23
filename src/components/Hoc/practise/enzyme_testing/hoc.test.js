import React from "react";
import { shallow } from "enzyme";
import Logo from "../../logo";

const findByTestAttr = (component, attribute) => {
  const wrapper = component.find(`[data-test='${attribute}']`);
  return wrapper;
};

describe("Enzyme testing within HOC group", () => {
  let component;
  beforeEach(() => {
    component = shallow(<Logo />);
  });

  it("should render logo", () => {
    // console.log(component.debug());
    const logo = component.find(`[data-test='logo']`);
    expect(logo.length).toBe(1);
  });

  it("should render logo 2", () => {
    const logo = findByTestAttr(component, "logo");
    expect(logo.length).toBe(1);
  });
});
