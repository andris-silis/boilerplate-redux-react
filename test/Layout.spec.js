import should from "should";
import React from "react";
import { findDOMNode } from "react-dom";
import { renderIntoDocument, findRenderedDOMComponentWithTag, Simulate } from "react-addons-test-utils";

import Layout from "../src/ui/layout/Layout";

describe("Layout", () => {
  it("is", (done) => {
    const detachedComp = renderIntoDocument(<Layout />);
    var div = findRenderedDOMComponentWithTag(detachedComp, "div");
    var divNode = findDOMNode(div);
    should.exist(divNode);
    // Simulate.click(buttonNode);

    done();
  });
});
