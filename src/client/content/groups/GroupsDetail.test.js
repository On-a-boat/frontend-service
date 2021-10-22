import React from "react";
import GroupsDetail from "./GroupsDetail";
import { render } from "@testing-library/react";

describe("Test the group detail display", () => {
  it("should render", async () => {
    const wrapper = render(<GroupsDetail />);
    expect(wrapper).toBeTruthy();
  });
  it("Should display table of users in the table", async () => {
    const wrapper = render(<GroupsDetail />);
    expect(wrapper.getByTestId("Table")).toBeTruthy();
  });
});