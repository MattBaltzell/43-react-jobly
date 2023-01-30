import React from "react";
import App from "./App";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("App component tests", () => {
  // smoke test
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });

  // snapshot test
  it("matches snapshot", function() {
    const { asFragment } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
