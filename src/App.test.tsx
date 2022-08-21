import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders submit text", () => {
  render(<App />);
  const submit = screen.getByText(/submit/i);
  expect(submit).toBeInTheDocument();
});

test("renders date", () => {
  render(<App />);
  const date = screen.getByText(/date/i);
  expect(date).toBeInTheDocument();
});

test("renders time", () => {
  render(<App />);
  const time = screen.getByText(/time/i);
  expect(time).toBeInTheDocument();
});
