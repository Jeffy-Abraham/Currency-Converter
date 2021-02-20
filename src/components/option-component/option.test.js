import React from "react";
import Options from "./option.component";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import renderer from "react-test-renderer";
import checkPropTypes from "check-prop-types";
const data = {
  amount: 1,
  currentCurrency: {
    currency: "GBP",
    currencyName: "British Pound",
    flag: "https://www.countryflags.io/GB/shiny/64.png",
    id: 3,
    symbol: "£",
  },

  updateAmount: () => {},
  updateCurrency: () => {},
};

configure({ adapter: new Adapter() });
const setUp = (props = {}) => {
  const component = shallow(<Options {...data} />);
  return component;
};

//Has container div
describe("Optioncomponent", () => {
  it("it should render a main container", () => {
    const component = setUp();
    const Container = component.find(".Currency-Container");
    expect(Container.length).toBe(1);
  });
});

//Make sure it has 16 countries
describe("Optioncomponent", () => {
  it("it should have 16 countries in its option list", () => {
    const component = setUp();
    const Container = component.find(".Option-Data");
    expect(Container.length).toBe(16);
  });
});
//Create a snapshot for Options
describe("A snapshot is created for options", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Options {...data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
//check if proptypes
describe("Option Component", () => {
  describe("Checking PropType", () => {
    it("Do not throw a warning", () => {
      const expectedProps = {
        currencyName: "American DOllar",
        currency: "USD",
        symbol: "$",
      };
      const propsErr = checkPropTypes(
        Options.propTypes,
        expectedProps,
        "props",
        Options
      );
      expect(propsErr).toBeUndefined();
    });
  });
});
