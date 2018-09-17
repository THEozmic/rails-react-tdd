import React from "react";
import { render, cleanup, getByText } from "react-testing-library";
import Home from "../components/Home";

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

test("Home component contains table element", () => {
  const { container } = render(<Home />);

  expect(container.querySelector("table")).toBeTruthy();
});

test("Home component table contains appropriate headings", () => {
  const { container } = render(<Home />);

  expect(getByText(container, "Name")).toBeTruthy();
  expect(getByText(container, "Location")).toBeTruthy();
  expect(getByText(container, "Status")).toBeTruthy();
  expect(getByText(container, "Action")).toBeTruthy();
});
