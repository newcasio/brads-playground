import React from "react";
import { shallow } from "enzyme";
import Mosaic from "./Mosaic";

describe("mosaic grid tests", () => {
  let component;
  beforeEach(() => {
    component = shallow(<Mosaic />);
  });

  it("should contain grid", () => {
    let wrapper = component.find(`[data-test="grid"]`);
    expect(wrapper.length).toBe(1);
  });

  it("should contain 8 images", () => {
    let wrapper = component.find(`[data-test="testImage"]`);
    expect(wrapper.length).toBe(8);
  });
});
