import React from "react";
import Enzyme, { shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { SearchBar } from "../../index";

Enzyme.configure({ adapter: new Adapter() });

describe("A suite", () => {
  it("should render without throwing an error", () => {
    expect(shallow(<SearchBar />).contains(<label>Search Label</label>)).toBe(
      true
    );
  });

  it("should mount in a full DOM", () => {
    expect(mount(<SearchBar />).find(".segment").length).toBe(1);
  });

  it("should give additional 'search-bar' class name to Segment container", () => {
    expect(mount(<SearchBar />).find(".search-bar.ui.segment").length).toBe(1);
  });

  it("should render to static HTML", () => {
    expect(render(<SearchBar />).text()).toEqual("Search Label");
  });

  it("should set the 'label' property when provided", () => {
    expect(render(<SearchBar label="Fancy" />).text()).toEqual("Fancy");
  });
});
