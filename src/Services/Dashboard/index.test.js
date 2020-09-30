import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Dashboard from "./index";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Renders", () => {
  act(() => {
    render(<Dashboard />, container);
  });

  expect(document.getElementById("header").innerHTML).toBe("This is Dashboard");
});

it("Button Works", () => {
  act(() => {
    render(<Dashboard />, container);
  });

  const button = document.getElementById("changeTextButton");
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(document.getElementById("header").innerHTML).toBe(
    "Text is now changed!"
  );
});
