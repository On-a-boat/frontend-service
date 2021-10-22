import React from "react";
import Login from "./Login";
import { render } from "@testing-library/react";

describe("Test the login page", () => {
  it("should render", async () => {
    const wrapper = render(<Login />);
    expect(wrapper).toBeTruthy();
  });
  it("Login Component should exists", async () => {
    const wrapper = render(<Login />);
    expect(wrapper.getByText("Login")).toBeTruthy();
  });
});
