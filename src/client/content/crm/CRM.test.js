import React from "react";
import CRM from "./CRM";
import { render } from "@testing-library/react";

describe("Test the CRM page", () => {
  it("should render", async () => {
    const wrapper = render(<CRM />);
    expect(wrapper).toBeTruthy();
  });
  it("CRM table should exist", async () => {
    const wrapper = render(<CRM />);
    expect(wrapper.getByTestId("Table")).toBeTruthy();
  });
});