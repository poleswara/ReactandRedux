import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

describe("Header Component", () => {
  test("render login", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const navElement = screen.getByText("Login");
    expect(navElement).toBeInTheDocument();
  });
});
