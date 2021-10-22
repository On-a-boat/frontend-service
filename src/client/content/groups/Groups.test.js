import React from "react";
import Groups from "./Groups";
import { render } from "@testing-library/react";

describe("Test the Group page", () => {
  it("should render", async () => {
    const wrapper = render(<Groups />);
    expect(wrapper).toBeTruthy();
  });
  it("Table of groups should exists", async () => {
    const wrapper = render(<Groups />);
    expect(wrapper.getByTestId("Table")).toBeTruthy();
  });
});