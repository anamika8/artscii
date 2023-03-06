import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders app component", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const appElement = document.querySelector(".App");
  expect(appElement).toBeInTheDocument();
});
