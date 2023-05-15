import { render, screen } from "@testing-library/react";
import { App } from "../src/App";

describe("App", () => {
  const title = "Hello world!";
  const subtitle = "subtitle text";

  test("should show h1 with title", () => {
    const { container, getByText, getByTestId } = render(<App title={title} />);
    expect(getByText(title)).toBeTruthy();

    const h1byQuerySelector = container.querySelector("h1");
    expect(h1byQuerySelector.innerHTML).toContain(title);

    const h1ByTestId = getByTestId("test-title");
    expect(h1ByTestId.innerHTML).toContain(title);
  });

  test("should show h1 with title (refactor)", () => {
    render(<App title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("should show two subtitles", () => {
    const { getAllByText } = render(<App title={title} subtitle={subtitle} />);

    expect(getAllByText(subtitle).length).toBe(2);
  });

  test("should show two subtitles (refactor)", () => {
    render(<App title={title} subtitle={subtitle} />);
    expect(screen.getAllByText(subtitle).length).toBe(2);
  });
});
