import React from "react";
import Header from "./navigation-component";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import checkPropTypes from "check-prop-types";

configure({ adapter: new Adapter() });
const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};
//Check if correct prop types are accurate
describe("Nav Component", () => {
  describe("Checking PropType", () => {
    it("Do not throw a warning", () => {
      const expectedProps = {
        Links: "/CURRENCYEXCHANGE",
        activeLink: 1,
      };
      const propsErr = checkPropTypes(
        Header.propTypes,
        expectedProps,
        "props",
        Header
      );
      expect(propsErr).toBeUndefined();
    });
  });
});
//Navigation has container
describe("Navigation component", () => {
  it("it should render without errors", () => {
    const component = setUp();

    const wrapper = component.find(".container");
    expect(wrapper.length).toBe(1);
  });
});
//Find the Active Link
describe("Navigation component", () => {
  it("it should render only one active link", () => {
    const component = setUp();
    const Link = component.find(".active-link");
    expect(Link.length).toBe(1);
  });
});
describe("A snapshot is created for HeaderComponent", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
