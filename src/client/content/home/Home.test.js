import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("should have home page", () => {
  render(Home);
  const home = screen.getByText("Home Page");
  expect(home).toBeTruthy();
});
