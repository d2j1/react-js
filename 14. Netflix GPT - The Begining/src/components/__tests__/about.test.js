import { describe, expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";


import About from "../About";




describe("About Component Tests", () => {
  test("About component should render correctly", () => {
  const { getByText } = render(<About />);
  expect(getByText("About us page")).toBeInTheDocument(); 
});

test("About component should have correct content", () => {
  render(<About />);

  const buttons = screen.getAllByRole("button");
  expect(buttons).toHaveLength(2);
});


test("About component should have button", () => {
  render(<About />);

  const buttons = screen.getAllByRole("button");
  expect(buttons).toHaveLength(2);
});




test("About component should have correct paragraph", () => {
  render(<About />);
  const paragraph = screen.getByText("This is namaste react about page of the course");
  expect(paragraph).toBeInTheDocument();
});

test("About component should have 2 buttons", () => {
  render(<About />);
    
  const buttons = screen.getAllByRole("button");
  expect(buttons).toHaveLength(2);
});

});