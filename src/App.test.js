import renderer from "react-test-renderer";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

describe("A snapshot is created for options", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
