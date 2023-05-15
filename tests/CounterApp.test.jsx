import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("CounterApp", () => {
  const initialValue = 100;

  test("should match snapshot", () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test("should show value as a h2", () => {
    render(<CounterApp value={initialValue} />);
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      initialValue.toString()
    );
  });

  test("should increase on click button '+1'", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    const newValueStr = (initialValue + 1).toString();
    expect(screen.getByText(newValueStr)).toBeTruthy();
  });

  test("should decrease on click button '-1'", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("-1"));
    const newValueStr = (initialValue - 1).toString();
    expect(screen.getByText(newValueStr)).toBeTruthy();
  });

  test("should reset on click button 'Reset'", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    const resetBtn = screen.getByRole("button", { name: "btn-reset" });
    fireEvent.click(resetBtn);
    expect(screen.getByText(initialValue.toString())).toBeTruthy();
  });
});
