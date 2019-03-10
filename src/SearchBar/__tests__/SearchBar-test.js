import React from "react";
import Enzyme, { shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Segment } from "semantic-ui-react";

import { SearchBar } from "../../index";

Enzyme.configure({ adapter: new Adapter() });

describe("A suite", function() {
  it("should render without throwing an error", function() {
    expect(
      shallow(<SearchBar />).contains(
        <label className="foo">Image Search</label>
      )
    ).toBe(true);
  });

  it("should be of type Segment", function() {
    expect(shallow(<SearchBar />).type()).toEqual(Segment);
  });

  it("should mount in a full DOM", function() {
    expect(mount(<SearchBar />).find(".segment").length).toBe(1);
  });

  it("should render to static HTML", function() {
    expect(render(<SearchBar />).text()).toEqual("Image Search");
  });
});
