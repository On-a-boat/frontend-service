import React from "react";
import UserProfile from "./UserProfile";
import { render } from "@testing-library/react";

describe("Test the detailed profile page", () => {
  it("should render", async () => {
    const wrapper = render(<UserProfile />);
    expect(wrapper).toBeTruthy();
  });
});