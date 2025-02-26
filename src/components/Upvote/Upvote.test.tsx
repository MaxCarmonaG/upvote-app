import { fireEvent, render, screen } from "@testing-library/react";
import { useState } from "react";
import Upvote from "./Upvote";

describe("Upvote Component", () => {
  it("should change selection on click", async () => {
    const WrapperComponent = () => {
      const [selected, setSelected] = useState(false);
      const onClick = () => setSelected((prev) => !prev);

      return <Upvote selected={selected} onClick={onClick} />;
    };

    render(<WrapperComponent />);

    const button = screen.getByRole("button", { name: "Upvote button" });

    fireEvent.click(button);

    expect(button.className).toMatch(/selected/i);

    fireEvent.click(button);

    expect(button.className).not.toMatch(/selected/i);
  });
});
