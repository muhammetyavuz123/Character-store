import { Form } from "./Form";
import "@testing-library/jest-dom";
import {
  fireEvent,
  render,
  screen,
  getByPlaceholderText,
} from "@testing-library/react";

test("form render correctly", () => {
  const { getByPlaceholderText } = render(<Form />);

  expect(getByPlaceholderText(/^Name/i)).toBeInTheDocument();
  expect(getByPlaceholderText(/^Job/i)).toBeInTheDocument();
  expect(getByPlaceholderText(/^About/i)).toBeInTheDocument();
  expect(getByPlaceholderText(/^Image/i)).toBeInTheDocument();
});

test("button render correctly", () => {
  const { getByPlaceholderText, getByRole } = render(<Form />);
  const button = getByRole("button", { name: /Add Character/ });

  const nameInput = getByPlaceholderText(/Name/i);
  //   expect(nameInput.type).toEqual("text");
});
