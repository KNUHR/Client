import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Menu from ".";

describe("menu", () => {
  it("should show menu items", () => {
    render(<Menu />);

    expect(screen.getByRole("button", { name: "my-page" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "meetings" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "chatting" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "logout" })).toBeInTheDocument();
  });
});
