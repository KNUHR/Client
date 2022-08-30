import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AppBar from ".";

describe("app bar", () => {
  it("should show login when not logged in", () => {
    render(<AppBar />);

    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("should show menu when logged in", () => {
    render(<AppBar loggedIn={true} />);

    expect(screen.getByRole("button", { name: /menu/i })).toBeInTheDocument();
  });
});
