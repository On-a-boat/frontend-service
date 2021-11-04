//create a unit test for the Home component using testing library/react-testing-library

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  it("renders", () => {
    render(<Home />);
  });

  it("renders the title", () => {
    render(<Home />);
    const title = screen.getByText("Welcome to WEEY CRM");
    expect(title).toBeInTheDocument();
  });
  it("renders Users", () => {
    render(<Home />);
    const users = screen.getByText("Users");
    expect(users).toBeInTheDocument();
  });
  it("renders Groups", () => {
    render(<Home />);
    const users = screen.getByText("Groups");
    expect(users).toBeInTheDocument();
  });
  it("renders Statistics", () => {
    render(<Home />);
    const users = screen.getByText("Statistics");
    expect(users).toBeInTheDocument();
  });
});
