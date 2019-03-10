import React from "react";
import Enzyme, { shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Segment } from "semantic-ui-react";

import { SearchBar } from "../../index";

Enzyme.configure({ adapter: new Adapter() });

describe("A suite", () => {
  it("should render without throwing an error", () => {
    expect(shallow(<SearchBar />).contains(<label>Search Label</label>)).toBe(
      true
    );
  });

  it("should be of type Segment", () => {
    expect(shallow(<SearchBar />).type()).toEqual(Segment);
  });

  it("should mount in a full DOM", () => {
    expect(mount(<SearchBar />).find(".segment").length).toBe(1);
  });

  it("should render to static HTML", () => {
    expect(render(<SearchBar />).text()).toEqual("Search Label");
  });

  it("should set the 'label' property when provided", () => {
    expect(render(<SearchBar label="Fancy" />).text()).toEqual("Fancy");
  });
});
