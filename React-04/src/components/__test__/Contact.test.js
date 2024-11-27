// UNIT TESTING
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"; // to get the list of a lot of function that we can assert to. e.g. toBeInTheDocument()

// for grouping test cases
describe("Contact Us Test Cases", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  // afterAll(() => {
  //   console.log("After All");
  // });

  // afterEach(() => {
  //   console.log("After Each");
  // });

  // this test can be written as it() also
  test("Should load contact us component", () => {
    render(<Contact />); // rendering component onto JS DOM

    const heading = screen.getByRole("heading"); // testing that heading is there or not

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside contact us component", () => {
    render(<Contact />);

    // const button = screen.getByRole('button')
    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  test("Should load input box with placeholder name inside contact us component", () => {
    render(<Contact />);

    const input = screen.getByPlaceholderText("Name");

    expect(input).toBeInTheDocument();
  });

  test("Should load 2 input boxes inside contact us component", () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox"); // for multiple items we will use `.getAllByRole()`

    // console.log(inputBoxes.length); // returns a array with 2 elements
    // when we console log what is returned over there, it return JSX element/React element/Object

    // expect(inputBoxes.length).toBe(2)
    expect(inputBoxes.length).not.toBe(3);
  });
});
