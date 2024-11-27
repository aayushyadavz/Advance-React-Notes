// Integration Test
import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/resCardListMock.json";
import "@testing-library/jest-dom";
import { act } from "react";

// Mock Function
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search res list for burger text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  // Checking whether there are 8 cards displayed when rendering the Body component
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(8);

  // Finding our Search button and Search input
  const inputBox = screen.getByPlaceholderText(
    "Search for restaurants and food"
  );
  const searchButton = screen.getByTestId("search");

  // Firing two events: changing the input box and clicking the search button
  fireEvent.change(inputBox, { target: { value: "burger" } });
  fireEvent.click(searchButton);

  // After clicking the search button, we get 2 cards.
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(2);
});

it("Should filter top rated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(8);

  const filterButton = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(filterButton);

  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(1);
});

// Notes:

// Essentially, the JavaScript DOM doesn't recognize what fetch is because fetch is a feature provided by the browser. Therefore, we have written a mock function for our fetch.

// Fetch returns a promise, which is why we are also returning a promise here. We are mocking this fetch function to behave exactly like the original fetch function in `Body.js`. The promise is then converted to JSON, which again returns a promise containing the actual data.

// Whenever we use fetch or update the state, we need to wrap the render method inside the act function. The act function returns a promise, so we need to use async/await.
