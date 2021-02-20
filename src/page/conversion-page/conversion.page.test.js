import React from "react";
import Conversion from "./conversion.page";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount, render } from "enzyme";
import ListStateProvider from "../../context/listExchangeRate-context/listExchangeRate-context";

import renderer from "react-test-renderer";

configure({ adapter: new Adapter() });
const setUp = (props = {}) => {
  const component = shallow(
    <ListStateProvider
      value={{ AED: 3.67295, AFN: 77.199999, ALL: 102.35, AMD: 522.721686 }}
    >
      <Conversion />
    </ListStateProvider>
  ).dive();
  console.log(component.debug());
  return component;
};
describe("A snapshot is created for ConversionPage", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ListStateProvider
          value={{ AED: 3.67295, AFN: 77.199999, ALL: 102.35, AMD: 522.721686 }}
        >
          <Conversion />
        </ListStateProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

  